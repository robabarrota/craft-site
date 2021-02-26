import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { ProductsService } from '../../Services/products/products.service';
import { Product } from '../../Models/Product';
import { ProductProperty } from '../../Models/ProductProperty';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  productData = new Map<string, Product[]>();
  displayProducts: Product[] = [];
  totalProducts: Product[] = [];
  filters: ProductProperty[] = [];
  activeFilters = new Map<string, Map<string, boolean>>();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    public dialog: MatDialog) {
      this.productData.set(
        "Scrunchies",
        productsService.getScrunchyData()
      );
      this.productData.set(
        "Pouches",
        productsService.getPouchData()
      );
      this.productData.set(
        "Bandanas",
        productsService.getBandanaData()
      );
      this.productData.set(
        "Masks",
        productsService.getMaskData()
      );
      this.productData.set(
        "Candles",
        productsService.getCandleData()
      );
      this.productData.set(
        "All",
        productsService.getAllProducts()
      );
    }

  ngOnInit() {
    // Set products on shop page init
    this.route.url.subscribe((url) => {
      this.initialize(url[1].path);
    });

    // Update products within shop page
    this.router.events.subscribe((val) => { 
      if (val instanceof ActivationEnd) {
        this.initialize(val.snapshot.params.Product);
      }
    });
  }

  initialize(productPath: string) {
    this.totalProducts = this.productData.get(productPath); 
    this.displayProducts = this.totalProducts;
    this.filters = this.productsService.getFilterableProperties(productPath);
  }

  applyFilter(filterObject: any) {
    var filteredProducts = this.totalProducts;

    this.activeFilters.set(filterObject.propertyName, filterObject.filterMap);

    this.activeFilters.forEach((value: Map<string, boolean>, key: string) => {
      filteredProducts = this.filterByProperty(key, filteredProducts);
    });
    this.displayProducts = filteredProducts;
  }

  filterByProperty(property: string, products: Product[]) {
    var filtersForProperty = this.activeFilters.get(property);
    var filteredResult = products;

    var propertyFiltered = false;
    filtersForProperty.forEach((v, k) => {
      if (v == true)
      propertyFiltered = true;
    });
  
    if (propertyFiltered) {
      filteredResult = products.filter((product) => {
        return filtersForProperty.get(product[property.toLowerCase()]) == true;
      });
    }

    return filteredResult; 
  }

  resetFilters() {
    this.router.navigate([this.router.url]);
  }

  viewDetails(imagePath: string) {
    let dialogRef = this.dialog.open(ProductDetailsComponent, {
      height: 'auto',
      width: '90%',
      data: {
        imagePath: imagePath
      },
      panelClass: 'my-dialog'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from './Product';
import { ProductProperty } from './ProductProperty';

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
    productsService: ProductsService) {
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
      this.filters = productsService.getFilterableProperties();
    }

  ngOnInit() {
    // Set products on shop page init
    this.route.url.subscribe((u) => {
      this.totalProducts = this.productData.get(u[1].path);
      this.displayProducts = this.totalProducts;
    });

    // Update products within shop page
    this.router.events.subscribe((val) => { 
      if (val instanceof ActivationEnd) {
        this.totalProducts = this.productData.get(val.snapshot.params.Product); 
        this.displayProducts = this.totalProducts;
      }
    });
  }

  applyFilter(filterObject: any) {
    var filterChecked = false;
    filterObject.filterMap.forEach((v, k) => {
      if (v == true)
        filterChecked = true;
    });
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
}

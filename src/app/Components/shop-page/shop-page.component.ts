import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from './Product';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  productData = new Map<string, Product[]>();
  displayProducts: Product[] = [];
  totalProducts: Product[] = [];
  filterMaterialBoxes = new Map<string, boolean>();
  productFilters: string[] = [];

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
    }

  ngOnInit() {
    // Set products on shop page init
    this.route.url.subscribe((u) => {
      this.totalProducts = this.productData.get(u[1].path);
      this.displayProducts = this.totalProducts;
    });
    this.updateFilterBoxes();

    // Update products within shop page
    this.router.events.subscribe((val) => { 
      if (val instanceof ActivationEnd) {
        this.totalProducts = this.productData.get(val.snapshot.params.Product); 
        this.displayProducts = this.totalProducts;
      }
      this.updateFilterBoxes();
      });
  }

  updateFilterBoxes(){
    this.filterMaterialBoxes.clear();
    this.totalProducts.forEach((item, index) => {
      if (!this.filterMaterialBoxes.has(item.material))
        this.filterMaterialBoxes.set(item.material, false);
    });
    this.sortFilters();
    this.applyFilter();
  }

  sortFilters() {
    const sortedList: any = {};
    Object.keys(this.filterMaterialBoxes)
      .sort() // or pass a custom compareFn there, faster than using .reverse()
      .reverse()
      .forEach(x => sortedList[x] = this.filterMaterialBoxes[x])
    return sortedList;
  }

  toggleFilter(filter: any, event: any) {
    this.filterMaterialBoxes.set(filter.key, event.checked);
    this.applyFilter();
  }

  applyFilter() {
    var filterChecked = false;
    this.filterMaterialBoxes.forEach((v, k) => {
      if (v == true)
        filterChecked = true;
    });
    this.displayProducts = filterChecked? 
    this.totalProducts.filter((p) => {
      return this.filterMaterialBoxes.get(p.material) == true
    }) :
    this.totalProducts;
  }
}

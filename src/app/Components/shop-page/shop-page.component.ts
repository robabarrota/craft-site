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

    // Update products within shop page
    this.router.events.subscribe((val) => { 
      if (val instanceof ActivationEnd) {
        this.totalProducts = this.productData.get(val.snapshot.params.Product); 
        this.displayProducts = this.totalProducts;
      }
    });
  }

  displayFilteredProducts(filteredProducts: Product[]) {
    this.displayProducts = filteredProducts;
  }
}

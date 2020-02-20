import { Injectable } from '@angular/core';
import productdataJson from './../../../assets/products/productdata.json';
import productpropertiesJson from './../../../assets/products/productproperties.json';

import { Product } from './Product.js';
import { ProductProperty } from './ProductProperty.js';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productdata: Product[] = productdataJson;
  productproperties: ProductProperty[] = productpropertiesJson;

  constructor() {}

  getScrunchyData() : Product[] {
    return this.productdata.filter(p => p.type == 'scrunchy');
  }

  getPouchData() : Product[] {
    return this.productdata.filter(p => p.type == 'pouch');
  }

  getBandanaData() : Product[] {
    return this.productdata.filter(p => p.type == 'bandana');
  }

  getFilterableProperties() : ProductProperty[] {
    return this.productproperties.filter(p => p.filterable == true);
  }
}

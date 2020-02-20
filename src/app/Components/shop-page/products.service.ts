import { Injectable } from '@angular/core';
import scrunchydata from './../../../assets/products/scrunchydata.json';
import pouchdata from './../../../assets/products/pouchdata.json';
import productdataJson from './../../../assets/products/productdata.json';

import { Product } from './Product.js';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productdata: Product[] = productdataJson;

  constructor() {}

  getScrunchyData() : Product[] {
    
    return this.productdata.filter(p => p.type == 'scrunchy');
  }

  getPouchData() : Product[]{
    return this.productdata.filter(p => p.type == 'pouch');
  }

  getBandanaData() : Product[]{
    return this.productdata.filter(p => p.type == 'bandana');
  }
}

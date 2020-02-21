import { Injectable } from '@angular/core';
import productdataJson from '../../../assets/products/productdata.json';
import productpropertiesJson from '../../../assets/products/productproperties.json';

import { Product } from '../../Models/Product.js';
import { ProductProperty } from '../../Models/ProductProperty.js';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productdata: Product[] = productdataJson;
  productproperties: ProductProperty[] = productpropertiesJson;

  constructor() {}

  getAllProducts() : Product[] {
    return this.productdata;
  }

  getScrunchyData() : Product[] {
    return this.productdata.filter(p => p.type == 'Scrunchy');
  }

  getPouchData() : Product[] {
    return this.productdata.filter(p => p.type == 'Pouch');
  }

  getBandanaData() : Product[] {
    return this.productdata.filter(p => p.type == 'Bandana');
  }

  getFilterableProperties() : ProductProperty[] {
    return this.productproperties.filter(p => p.filterable == true);
  }
}

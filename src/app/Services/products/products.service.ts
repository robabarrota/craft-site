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

  getMaskData() : Product[] {
    return this.productdata.filter(p => p.type == 'Mask');
  }

  getCandleData() : Product[] {
    return this.productdata.filter(p => p.type == 'Candle');
  }

  getFilterableProperties(productType) : ProductProperty[] {
    return this.productproperties.filter(p => (p.filterable == true && p.applicableToTypes.includes(productType)));
  }
}

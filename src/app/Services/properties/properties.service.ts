import { Injectable } from '@angular/core';
import { Properties } from 'src/app/Models/Properties';
import propertiesJson from '../../../assets/properties.json';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  properties: Properties = propertiesJson;

  constructor() { }

  getEmailContact() {
    return this.properties.emailContact;
  }

  getInstagramContact() {
    return this.properties.instagramContact;
  }

  getShopContact() {
    return this.properties.shopContact;
  }
}

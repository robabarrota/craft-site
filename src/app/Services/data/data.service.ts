import { Injectable } from '@angular/core';
import carouselImagesJson from '../../../assets/data/carouselImages.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  carouselImages: string[] = carouselImagesJson;

  constructor() { }
  
  getAllCarouselImages() : string[] {
    return this.carouselImages;
    ;
  }
}

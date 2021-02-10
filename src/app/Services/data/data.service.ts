import { Injectable } from '@angular/core';
import { FAQ } from 'src/app/Models/Faq';
import carouselImagesJson from '../../../assets/data/carouselImages.json';
import faqData from '../../../assets/data/faq.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  carouselImages: string[] = carouselImagesJson;
  faq: FAQ[] = faqData;

  constructor() { }
  
  getAllCarouselImages() : string[] {
    return this.carouselImages;
  }

  getFAQs() : FAQ[] {
    return this.faq;
  }
}

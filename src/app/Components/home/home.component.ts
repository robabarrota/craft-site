import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../Services/data/data.service';
import { CarouselWidgetComponent } from '../carousel-widget/carousel-widget.component';
import { AnimationType } from '../carousel-widget/carousel.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: string[] = this.dataService.getAllCarouselImages();

  constructor(private dataService: DataService) { }
  @ViewChild(CarouselWidgetComponent) carousel: CarouselWidgetComponent;

  animationType = AnimationType.Scale;
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselWidgetComponent } from './Components/carousel-widget/carousel-widget.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { FilterWidgetComponent } from './Components/filter-widget/filter-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CarouselWidgetComponent,
    ContactComponent,
    ShopPageComponent,
    AboutComponent,
    HomeComponent,
    FilterWidgetComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

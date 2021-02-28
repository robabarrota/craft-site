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
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqComponent } from './Components/faq/faq.component';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';

declare global {
  interface Window {
      opera:any;
  }
}
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
    FilterWidgetComponent,
    ProductDetailsComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsComponent]
})
export class AppModule { }

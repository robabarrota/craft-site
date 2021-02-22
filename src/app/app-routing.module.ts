import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { FaqComponent } from './Components/faq/faq.component';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path:'Home',
    component: HomeComponent
  },
  {
    path:'Shop/:Product',
    component: ShopPageComponent
  },
  {
    path:'Contact',
    component: ContactComponent
  },
  {
    path:'About',
    component: AboutComponent
  },
  {
    path:'FAQ',
    component: FaqComponent
  },
  {
    path:'TermsConditions',
    component: TermsConditionsComponent,
  },
  {
    path:'PrivacyPolicy',
    component: PrivacyPolicyComponent,
  },
  { path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';


const routes: Routes = [
  {
    path:'Home',
    component: HomeComponent
  },
  {
    path:'Shop',
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
  { path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  exports: [
     MatIconModule,
     MatButtonModule
  ]
})
export class AppMaterialModule { }

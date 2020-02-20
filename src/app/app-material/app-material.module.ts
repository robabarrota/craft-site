import { NgModule } from '@angular/core';
import { MatIconModule, MatMenuModule, MatExpansionModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  exports: [
     MatIconModule,
     MatButtonModule,
     MatMenuModule,
     MatExpansionModule,
     MatFormFieldModule,
     MatCheckboxModule
  ]
})
export class AppMaterialModule { }

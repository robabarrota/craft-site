import { NgModule } from '@angular/core';
import { MatIconModule, MatMenuModule, MatExpansionModule, MatFormFieldModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
     MatIconModule,
     MatButtonModule,
     MatMenuModule,
     MatExpansionModule,
     MatFormFieldModule,
     MatCheckboxModule,
     MatDialogModule
  ]
})
export class AppMaterialModule { }

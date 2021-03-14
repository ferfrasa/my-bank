import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponetsModule } from '../componets/componets.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponetsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

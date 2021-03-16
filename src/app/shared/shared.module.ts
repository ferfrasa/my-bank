import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponetsModule } from '../componets/componets.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponetsModule,
    NgxQRCodeModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    NgxQRCodeModule
  ],

})
export class SharedModule { }







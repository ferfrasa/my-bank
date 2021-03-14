import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppPageRoutingModule } from './app-routing.module';

import { AppPage } from './app.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AppPageRoutingModule,
    SharedModule
  ],
  declarations: [AppPage ]
})
export class AppPageModule {}

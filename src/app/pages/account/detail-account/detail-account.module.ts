import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAccountPageRoutingModule } from './detail-account-routing.module';

import { DetailAccountPage } from './detail-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAccountPageRoutingModule
  ],
  declarations: [DetailAccountPage]
})
export class DetailAccountPageModule {}

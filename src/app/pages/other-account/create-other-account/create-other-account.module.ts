import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOtherAccountPageRoutingModule } from './create-other-account-routing.module';

import { CreateOtherAccountPage } from './create-other-account.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CreateOtherAccountPageRoutingModule
  ],
  declarations: [CreateOtherAccountPage]
})
export class CreateOtherAccountPageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtherAccountPage } from './other-account.page';

import {OtherAccountRoutingModule } from './other-account-routing.module';
import { CreateOtherAccountPage } from './create-other-account/create-other-account.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: OtherAccountPage }]),
    OtherAccountRoutingModule,
  ],
  declarations: [OtherAccountPage],
  entryComponents:[CreateOtherAccountPage]

})
export class OtherAccountPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientPage } from './client.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ClientPageRoutingModule } from './client-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    ExploreContainerComponentModule,
    ClientPageRoutingModule,
    SharedModule
  ],
  declarations: [ClientPage],

})
export class ClientPageModule {}

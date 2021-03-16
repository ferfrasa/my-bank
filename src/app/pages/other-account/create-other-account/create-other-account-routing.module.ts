import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOtherAccountPage } from './create-other-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOtherAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOtherAccountPageRoutingModule {}

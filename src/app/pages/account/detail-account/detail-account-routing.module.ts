import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAccountPage } from './detail-account.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAccountPageRoutingModule {}

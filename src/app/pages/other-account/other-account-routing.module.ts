import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  OtherAccountPage } from './other-account.page';

const routes: Routes = [
  {
    path: '',
    component: OtherAccountPage,
  },
  {
    path: 'create-other-account',
    loadChildren: () => import('./create-other-account/create-other-account.module').then( m => m.CreateOtherAccountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherAccountRoutingModule {}

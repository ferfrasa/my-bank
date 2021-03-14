import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage,
    children: [
      {
        path: 'client',
        loadChildren: () => import('../client/client.module').then(m => m.ClientPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/app/client',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/client',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AppPageRoutingModule {}

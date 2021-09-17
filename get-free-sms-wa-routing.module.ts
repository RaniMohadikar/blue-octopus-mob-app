import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetFreeSmsWaPage } from './get-free-sms-wa.page';

const routes: Routes = [
  {
    path: '',
    component: GetFreeSmsWaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFreeSmsWaPageRoutingModule {}

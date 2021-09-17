import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskToLoginPage } from './ask-to-login.page';

const routes: Routes = [
  {
    path: '',
    component: AskToLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskToLoginPageRoutingModule {}

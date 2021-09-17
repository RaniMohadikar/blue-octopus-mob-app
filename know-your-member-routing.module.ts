import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowYourMemberPage } from './know-your-member.page';

const routes: Routes = [
  {
    path: '',
    component: KnowYourMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowYourMemberPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrolledMemberBasePage } from './enrolled-member-base.page';

const routes: Routes = [
  {
    path: '',
    component: EnrolledMemberBasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrolledMemberBasePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberWebpagePerformancePage } from './member-webpage-performance.page';

const routes: Routes = [
  {
    path: '',
    component: MemberWebpagePerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberWebpagePerformancePageRoutingModule {}

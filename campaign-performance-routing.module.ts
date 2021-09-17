import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignPerformancePage } from './campaign-performance.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignPerformancePageRoutingModule {}

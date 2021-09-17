import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignPerformancePageRoutingModule } from './campaign-performance-routing.module';

import { CampaignPerformancePage } from './campaign-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignPerformancePageRoutingModule
  ],
  declarations: [CampaignPerformancePage]
})
export class CampaignPerformancePageModule {}

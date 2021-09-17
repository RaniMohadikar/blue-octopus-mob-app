import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedemptionRatePageRoutingModule } from './redemption-rate-routing.module';

import { RedemptionRatePage } from './redemption-rate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedemptionRatePageRoutingModule
  ],
  declarations: [RedemptionRatePage]
})
export class RedemptionRatePageModule {}

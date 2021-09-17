import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberWebpagePerformancePageRoutingModule } from './member-webpage-performance-routing.module';

import { MemberWebpagePerformancePage } from './member-webpage-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberWebpagePerformancePageRoutingModule
  ],
  declarations: [MemberWebpagePerformancePage]
})
export class MemberWebpagePerformancePageModule {}

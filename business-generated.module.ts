import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessGeneratedPageRoutingModule } from './business-generated-routing.module';

import { BusinessGeneratedPage } from './business-generated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessGeneratedPageRoutingModule
  ],
  declarations: [BusinessGeneratedPage]
})
export class BusinessGeneratedPageModule {}

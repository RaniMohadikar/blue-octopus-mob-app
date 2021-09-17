import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFreeSmsWaPageRoutingModule } from './get-free-sms-wa-routing.module';

import { GetFreeSmsWaPage } from './get-free-sms-wa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetFreeSmsWaPageRoutingModule
  ],
  declarations: [GetFreeSmsWaPage]
})
export class GetFreeSmsWaPageModule {}

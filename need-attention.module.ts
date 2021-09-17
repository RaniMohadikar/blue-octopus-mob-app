import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedAttentionPageRoutingModule } from './need-attention-routing.module';

import { NeedAttentionPage } from './need-attention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeedAttentionPageRoutingModule
  ],
  declarations: [NeedAttentionPage]
})
export class NeedAttentionPageModule {}

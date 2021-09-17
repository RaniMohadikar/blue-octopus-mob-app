import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowYourMemberPageRoutingModule } from './know-your-member-routing.module';

import { KnowYourMemberPage } from './know-your-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowYourMemberPageRoutingModule
  ],
  declarations: [KnowYourMemberPage]
})
export class KnowYourMemberPageModule {}

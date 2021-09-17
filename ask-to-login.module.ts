import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskToLoginPageRoutingModule } from './ask-to-login-routing.module';

import { AskToLoginPage } from './ask-to-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskToLoginPageRoutingModule
  ],
  declarations: [AskToLoginPage]
})
export class AskToLoginPageModule {}

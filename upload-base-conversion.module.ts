import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadBaseConversionPageRoutingModule } from './upload-base-conversion-routing.module';

import { UploadBaseConversionPage } from './upload-base-conversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadBaseConversionPageRoutingModule
  ],
  declarations: [UploadBaseConversionPage]
})
export class UploadBaseConversionPageModule {}

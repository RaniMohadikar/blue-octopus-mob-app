import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrolledMemberBasePageRoutingModule } from './enrolled-member-base-routing.module';

import { EnrolledMemberBasePage } from './enrolled-member-base.page';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrolledMemberBasePageRoutingModule,
    MatPaginatorModule,
    MatTableModule 
  ],
  declarations: [EnrolledMemberBasePage]
})
export class EnrolledMemberBasePageModule {}

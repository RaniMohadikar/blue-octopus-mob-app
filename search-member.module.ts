import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMemberPageRoutingModule } from './search-member-routing.module';

import { SearchMemberPage } from './search-member.page';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMemberPageRoutingModule,
    // NgxDatatableModule,
    MatPaginatorModule,
    MatTableModule 
  ],
  declarations: [SearchMemberPage]
})
export class SearchMemberPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListestudentPageRoutingModule } from './listestudent-routing.module';

import { ListestudentPage } from './listestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListestudentPageRoutingModule
  ],
  declarations: [ListestudentPage]
})
export class ListestudentPageModule {}

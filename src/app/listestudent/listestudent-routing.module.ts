import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListestudentPage } from './listestudent.page';

const routes: Routes = [
  {
    path: '',
    component: ListestudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListestudentPageRoutingModule {}

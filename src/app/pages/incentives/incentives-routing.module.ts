import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncentivesPage } from './incentives.page';

const routes: Routes = [
  {
    path: '',
    component: IncentivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncentivesPageRoutingModule {}

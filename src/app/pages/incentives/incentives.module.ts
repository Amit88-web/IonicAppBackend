import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncentivesPageRoutingModule } from './incentives-routing.module';

import { IncentivesPage } from './incentives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncentivesPageRoutingModule
  ],
  declarations: [IncentivesPage]
})
export class IncentivesPageModule {}

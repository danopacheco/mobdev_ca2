import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecimenDatailsPageRoutingModule } from './specimen-datails-routing.module';

import { SpecimenDatailsPage } from './specimen-datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecimenDatailsPageRoutingModule
  ],
  declarations: [SpecimenDatailsPage]
})
export class SpecimenDatailsPageModule {}

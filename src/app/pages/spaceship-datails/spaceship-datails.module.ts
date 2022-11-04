import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceshipDatailsPageRoutingModule } from './spaceship-datails-routing.module';

import { SpaceshipDatailsPage } from './spaceship-datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceshipDatailsPageRoutingModule
  ],
  declarations: [SpaceshipDatailsPage]
})
export class SpaceshipDatailsPageModule {}

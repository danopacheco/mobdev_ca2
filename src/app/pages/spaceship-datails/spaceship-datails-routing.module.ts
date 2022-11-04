import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceshipDatailsPage } from './spaceship-datails.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipDatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceshipDatailsPageRoutingModule {}

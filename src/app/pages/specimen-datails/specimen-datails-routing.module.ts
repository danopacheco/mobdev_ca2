import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecimenDatailsPage } from './specimen-datails.page';

const routes: Routes = [
  {
    path: '',
    component: SpecimenDatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecimenDatailsPageRoutingModule {}

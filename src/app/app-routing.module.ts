import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'species',
    loadChildren: () => import('./pages/species/species.module').then( m => m.SpeciesPageModule)
  },
  {
    path: 'spaceships',
    loadChildren: () => import('./pages/spaceships/spaceships.module').then( m => m.SpaceshipsPageModule)
  },
  {
    path: 'specimen-datails',
    loadChildren: () => import('./pages/specimen-datails/specimen-datails.module').then( m => m.SpecimenDatailsPageModule)
  },
  {
    path: 'spaceship-datails',
    loadChildren: () => import('./pages/spaceship-datails/spaceship-datails.module').then( m => m.SpaceshipDatailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

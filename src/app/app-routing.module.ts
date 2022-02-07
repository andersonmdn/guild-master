import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'expeditions',
  },
  {
    path: 'expeditions',
    loadChildren: () =>
      import('./pages/expeditions/expeditions.module').then(
        (m) => m.ExpeditionsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

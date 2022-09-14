import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PizzaDetailsComponent } from './Components/pizza-details/pizza-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pizza-details', component: PizzaDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

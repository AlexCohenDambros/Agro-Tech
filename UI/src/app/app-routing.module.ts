import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component-home/component-home.component';
import { FarmComponent } from './component-farm/component-farm.component';
import { MarketComponent } from './component-market/component-market.component';
import { ProfileComponent } from './component-profile/component-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'farm', component: FarmComponent},
  { path: 'market', component: MarketComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

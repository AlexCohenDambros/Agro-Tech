import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmComponent } from './component-farm/component-farm.component';
import { MarketComponent } from './component-market/component-market.component';
import { HomeComponent } from './component-home/component-home.component';
import { ProfileComponent } from './component-profile/component-profile.component';

@NgModule({
  declarations: [
    AppComponent,
      FarmComponent,
      MarketComponent,
      HomeComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

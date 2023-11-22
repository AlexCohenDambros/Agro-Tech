import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmComponent } from './component-farm/component-farm.component';
import { MarketComponent } from './component-market/component-market.component';
import { HomeComponent } from './component-home/component-home.component';
import { ProfileComponent } from './component-profile/component-profile.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    MarketComponent,
    HomeComponent,
    ProfileComponent,
    NavComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

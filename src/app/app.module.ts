import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { AuthRegComponent } from './components/auth-reg/auth-reg.component';
import { HomeComponent } from './components/home/home.component';
import { RegPageComponent } from './components/reg-page/reg-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthRegComponent,
    HomeComponent,
    RegPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

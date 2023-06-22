import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { AuthRegComponent } from './components/auth-reg/auth-reg.component';
import { RegPageComponent } from './components/reg-page/reg-page.component';
import { JewelryListComponent } from './components/jewelry-list/jewelry-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JewelryService } from './components/service/jewelry.service';
import { JewelryFormComponent } from './components/jewelry-form/jewelry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthRegComponent,
    RegPageComponent,
    JewelryListComponent,
    JewelryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [JewelryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

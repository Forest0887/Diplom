import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthRegComponent} from "./components/auth-reg/auth-reg.component";
import {HomeComponent} from "./components/home/home.component";
import {RegPageComponent} from "./components/reg-page/reg-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'auth-reg', component: AuthRegComponent},
  {path: 'reg-page', component: RegPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

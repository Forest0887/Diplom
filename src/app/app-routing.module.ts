import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthRegComponent} from "./components/auth-reg/auth-reg.component";
import {RegPageComponent} from "./components/reg-page/reg-page.component";
import {JewelryListComponent} from "./components/jewelry-list/jewelry-list.component";
import {JewelryFormComponent} from "./components/jewelry-form/jewelry-form.component";
import {JewPageComponent} from "./components/jew-page/jew-page.component";

const routes: Routes = [
  {path: 'auth-reg', component: AuthRegComponent},
  {path: 'reg-page', component: RegPageComponent},
  {path: 'jewelry', component: JewelryListComponent},
  {path: 'addJewelry', component: JewelryFormComponent},
  {path: 'id/:id', component: JewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

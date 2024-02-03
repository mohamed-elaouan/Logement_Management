import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundPagecComponent } from './Pages/not-found-pagec/not-found-pagec.component';
import { AddLogementComponent } from './Pages/add-logement/add-logement.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"AddNew", component: AddLogementComponent},
  {path:"Edit/:id", component: AddLogementComponent},
  {path:"**", component: NotFoundPagecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

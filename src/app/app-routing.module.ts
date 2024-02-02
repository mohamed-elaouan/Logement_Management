import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundPagecComponent } from './Pages/not-found-pagec/not-found-pagec.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"**", component: NotFoundPagecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

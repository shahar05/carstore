import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarTrafficLightGameComponent } from './components/car-traffic-light-game/car-traffic-light-game.component';
import { HomeComponent } from './components/home/home.component';
import { ModelPageComponent } from './components/model-page/model-page.component';
import { UrlPage } from './models';

const routes: Routes = [
  {path : UrlPage.Home , component : HomeComponent } ,
  {path : UrlPage.Model , component : ModelPageComponent } ,
  {path : UrlPage.CarGame , component : CarTrafficLightGameComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

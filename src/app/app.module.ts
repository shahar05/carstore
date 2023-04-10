import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrandComponent } from './components/brand/brand.component';
import { ModelComponent } from './components/model/model.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelPageComponent } from './components/model-page/model-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FinanceOfferComponent } from './components/finance-offer/finance-offer.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { CarTrafficLightGameComponent } from './components/car-traffic-light-game/car-traffic-light-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandComponent,
    ModelComponent,
    ModelPageComponent,
    FinanceOfferComponent,
    CarTrafficLightGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

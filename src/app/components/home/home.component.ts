import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand, Model, UrlPage } from 'src/app/models';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';

enum State {
  Brand,
  Model
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  header = 'Choose a Brand';
  state = State.Brand;
  State = State;
  brands: Brand[] = [];
  models: Model[] = [];

  constructor(private router : Router ,private brandService: BrandService, private modelService: ModelService){}

  ngOnInit(): void {
    this.setBrandsList()
  }

  setBrandsList() {
    this.brands = this.brandService.getBrands();
  }

  changeToModelState(brand: Brand) {
    this.modelService.getModels(brand).subscribe(models => {
      this.header = 'Choose a car Model'
      this.state = State.Model;
      this.models = models;
    })
  }

  changeToBrandState() {
    this.state = State.Brand; 
    this.header = 'Choose a Brand';
  }

  navToModelPage(model: Model) {
    this.modelService.saveModel(model);
    this.router.navigate([UrlPage.Model])
  }

  navToGamePage() {
    this.router.navigate([UrlPage.CarGame])
  }

}

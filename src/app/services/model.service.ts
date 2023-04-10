import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ApiModel, Brand, Model } from '../models';
import { NetService } from './net.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private model: Model | null = null;
  constructor(private net: NetService, private util:UtilService) { }

  getModel(){
    return this.model;
  }

  saveModel(model: Model) {
    this.model = model;
  }

  getModels( brand: Brand ): Observable<Model[]>{
    return this.net.getModels(brand.name).pipe((map(
      (fullModels: ApiModel[]) => {
        let existsModelMap = new Map<string,boolean>();
        let models: Model[] = [];
        
        
        for (const m of fullModels) {
          if (!existsModelMap.has(m.model) ) {
            existsModelMap.set(m.model,true)
            console.log(m);
            
            models.push({
              image: brand.image,
              name: m.model,
              price: this.util.getRandomInt({min: 50000, max:300000}),
              cityMpg: m.city_mpg,
              class: m.class,
              combinationMpg: m.combination_mpg,
              fuelType: m.fuel_type,
              highwayMpg: m.highway_mpg,
              transmission: m.transmission,
              year: m.year,
              make: m.make
            })
          }
        }

        return models;
      }
    )))
  }
}

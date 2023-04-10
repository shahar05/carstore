import { Injectable } from '@angular/core';
import { Brand } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  getBrands(): Brand[] {
      return [
        {
          name: 'Audi',
          image: '/assets/logos/audi.jpg'
        },
        {
          name: 'Toyota',
          image: '/assets/logos/toyota.png'
        },
        {
          name: 'Mazda',
          image: '/assets/logos/mazda.jpg'
        },
        {
          name: 'Mercedes-benz',
          image: '/assets/logos/mercedes.jpg'
        },
      ]
  }
  
}

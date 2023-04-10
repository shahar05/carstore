import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from 'src/app/models';

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  @Input() brand: Brand | null = null;

  
} 

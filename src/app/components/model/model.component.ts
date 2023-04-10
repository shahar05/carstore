import { Component, Input } from '@angular/core';
import { Model } from 'src/app/models';

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @Input() model: Model | null = null;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrafficLightGameComponent } from './car-traffic-light-game.component';

describe('CarTrafficLightGameComponent', () => {
  let component: CarTrafficLightGameComponent;
  let fixture: ComponentFixture<CarTrafficLightGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTrafficLightGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTrafficLightGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

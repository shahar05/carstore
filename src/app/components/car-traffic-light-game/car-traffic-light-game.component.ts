import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UrlPage } from 'src/app/models';

@Component({
  selector: 'app-car-traffic-light-game',
  templateUrl: './car-traffic-light-game.component.html',
  styleUrls: ['./car-traffic-light-game.component.scss'],
})
export class CarTrafficLightGameComponent implements OnInit {
  carPosition = 0;
  carPositionStr = 'left: 0%;';
  redLightOn = true;
  gameMsg = 'Have Fun! You can use arrow keys as well :)';
  constructor(private router: Router){}

  navToHomePage() {
    this.router.navigate([UrlPage.Home])
  }

  ngOnInit(): void {
    setInterval(() => {
      this.redLightOn = !this.redLightOn;
    }, 1000);
  }

  @HostListener('window:keydown.ArrowRight', ['$event'])
  moveForward() {
    this.carPosition = (this.carPosition + 10) % 100;
    this.carPositionStr = `left: ${this.carPosition}%;`;
    if (this.carPosition == 50) {
      this.showGameMsg();
    }
  }

  @HostListener('window:keydown.ArrowLeft', ['$event'])
  moveBack() {
    if (this.carPosition === 0) {
      return;
    }
    this.carPosition = this.carPosition - 10;
    this.carPositionStr = `left: ${this.carPosition}%;`;
    if (this.carPosition == 40) {
      this.showGameMsg();
    }
  }

  showGameMsg() {
    if (this.redLightOn) {
      this.gameMsg = 'Warning Keep traffic light rules please :(';
    } else {
      this.gameMsg = 'Well done! you are doing a great job :)';
    }
  }

}

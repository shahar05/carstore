import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UrlPage } from 'src/app/models';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}

@Component({
  selector: 'app-car-traffic-light-game',
  templateUrl: './car-traffic-light-game.component.html',
  styleUrls: ['./car-traffic-light-game.component.scss'],
})
export class CarTrafficLightGameComponent implements OnInit {
  carPosition = 0;
  carPositionStr = 'left: 0%;';
  redLightOn = true;
  gameMsg = 'Have Fun!';
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
  handleArrowRightDown(event: KeyboardEvent) {
    this.carPosition = (this.carPosition + 10) % 100;
    this.carPositionStr = `left: ${this.carPosition}%;`;
    if (this.carPosition == 50) {
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

  @HostListener('window:keydown.ArrowLeft', ['$event'])
  handleArrowLeftDown(event: KeyboardEvent) {
    if (this.carPosition === 0) {
      return;
    }
    this.carPosition = this.carPosition - 10;
    this.carPositionStr = `left: ${this.carPosition}%;`;
    if (this.carPosition == 40) {
      this.showGameMsg();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CAR_INTEREST, FinanceData, Model, UrlPage } from 'src/app/models';
import { ModelService } from 'src/app/services/model.service';
import { FinanceOfferComponent } from '../finance-offer/finance-offer.component';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss'],
})
export class ModelPageComponent implements OnInit {
  model: Model | null = null;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private modelService: ModelService
  ) {}

  ngOnInit(): void {
    this.model = this.modelService.getModel();
    if (!this.model) {
      this.navToHomePage();
    }
  }

  showOffer() {
    if (!this.model) {
      return;
    }
    let financeModel: FinanceData = {
      carModel: this.model.name,
      carName: this.model.make,
      price: this.model.price,
    };
    this.dialog.open(FinanceOfferComponent, {
      data: financeModel,
      width: '500px',
      height: '500px',
    });
  }

  navToHomePage() {
    this.router.navigate([UrlPage.Home]);
  }
}

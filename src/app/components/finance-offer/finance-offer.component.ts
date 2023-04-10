import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CAR_INTEREST, FinanceData } from 'src/app/models';

@Component({
  selector: 'app-finance-offer',
  templateUrl: './finance-offer.component.html',
  styleUrls: ['./finance-offer.component.scss'],
})
export class FinanceOfferComponent implements OnInit {

  interest = CAR_INTEREST;
  avgMonthReturn = 0;
  totalPayment = 0;
  loan = 0;
  duration = 1;

  constructor(
    public dialogRef: MatDialogRef<FinanceOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FinanceData
  ) {}

  ngOnInit(): void {
    this.totalPayment = this.data.price;
  }

  calcPayment() {
    // Create payment sequence
    const noInterestMonthPayment = this.loan / this.duration;
    const step = (noInterestMonthPayment * 14) / 100;
    const interestMonthPayment = (this.loan * this.interest) / 100;
    const paymentSequence = [noInterestMonthPayment + interestMonthPayment];

    for (let i = 1; i < this.duration; i++) {
      paymentSequence.push(paymentSequence[i - 1] - step);
    }

    this.totalPayment = Math.ceil(
      paymentSequence.reduce((x1, x2) => x1 + x2, 0)
    );
    this.avgMonthReturn = Math.ceil(this.totalPayment / paymentSequence.length);
  }

  calcDuration(duration: number) {
    this.duration = duration;
    this.calcPayment();
  }

  calcLoan(loan: number) {
    this.loan = loan;
    this.calcPayment();
  }

  formatLabel(value: number): string {
    return (value / 1000).toFixed(1) + 'k';
  }

  exitDialog() {
    this.dialogRef.close();
    }
}

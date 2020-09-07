import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timestamp } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StockdetailsModule {
  id: number;
  companyCode: number;
  seName: string;
  currentPrice: number;
  date : Timestamp<Date>;
 }

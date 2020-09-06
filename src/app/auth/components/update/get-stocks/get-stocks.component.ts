import { Timestamp } from 'rxjs';
import { StockdetailsModule } from './../../../../stockdetails/stockdetails.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-get-stocks',
  templateUrl: './get-stocks.component.html',
  styleUrls: ['./get-stocks.component.scss']
})
export class GetStocksComponent implements OnInit {

  stockDetails : StockdetailsModule[]=[];
  isPresent:Boolean = false;
  companyname : Text;
  stocktemp : StockdetailsModule;
  request : any;
  response : any;

  date = new Date();
  timestamp = this.date.getTime();
  responsepage : string[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
      this.stocktemp = {
        id:1,
        companyCode:123,
        currentPrice:1000,
        seName:'NSE',
        date: this.date
      }
      // this.stockDetails[0] = this.stocktemp
      // this.request = {
      //   "companyName" : this.companyname
      // }
      let dat = this.authService.getStocks(this.request);
      dat.subscribe(data=>this.stockDetails=data,);
      // console.log(typeof this.ipodetails);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
}

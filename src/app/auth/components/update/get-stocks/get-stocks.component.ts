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
  
  stockid : number;

  companyCode : number;
  
  request : any;
  


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    
      this.request = this.stockid;
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

  onDelete() {
    this.request = {
      "companyCode" : this.companyCode
    }
    const StockDeleteObserver = {
      next: x => console.log('Deleted the Stocks'),
      error: err => console.log(err)
    };
    this.authService.deleteStocks(this.request).subscribe(StockDeleteObserver);
    this.request = null;
  }
}

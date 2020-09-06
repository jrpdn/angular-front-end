import { StockdetailsModule } from './../../../stockdetails/stockdetails.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-managestocks',
  templateUrl: './managestocks.component.html',
  styleUrls: ['./managestocks.component.scss']
})
export class ManagestocksComponent implements OnInit {

  stockDetails : StockdetailsModule;
  
  response : any;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    const StockUpdateObserver = {
      next: x => console.log('Updated the Stock'),
      error: err => console.log(err)
    };
      let dat = this.authService.updateCompany(this.stockDetails).subscribe(StockUpdateObserver);
      // dat.subscribe(data=>this.companyDetails=data);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
}

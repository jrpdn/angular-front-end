import { AuthService } from 'src/app/shared/services/auth.service';
import { SectorexchangeModule } from './../../../sectorexchange/sectorexchange.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.scss']
})
export class ManageexchangeComponent implements OnInit {

  stockExchange : SectorexchangeModule;
  constructor(private authService : AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    const StockExchangeUpdateObserver = {
      next: x => console.log('Updated the StockExchange'),
      error: err => console.log(err)
    };
      let dat = this.authService.updateCompany(this.stockExchange).subscribe(StockExchangeUpdateObserver);
      // dat.subscribe(data=>this.companyDetails=data);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
}

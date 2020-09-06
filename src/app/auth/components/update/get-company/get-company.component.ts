import { CompanydetailsModule } from './../../../../companydetails/companydetails.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.scss']
})
export class GetCompanyComponent implements OnInit {

  companyDetails : CompanydetailsModule[];
  isPresent:Boolean = false;
  companycode : number;

  request : any;
  response : any;

  responsepage : string[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
      this.request = {
        "companyCode" : this.companycode
      }
      let dat = this.authService.getCompany(this.request);
      dat.subscribe(data=>this.companyDetails=data,);
      // console.log(typeof this.ipodetails);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }
  onDelete() {
    this.request = {
      "companyCode" : this.companycode
    }
    const CompanyDeleteObserver = {
      next: x => console.log('Deleted the Company'),
      error: err => console.log(err)
    };
    this.authService.deleteCompany(this.request).subscribe(CompanyDeleteObserver);
  }
}

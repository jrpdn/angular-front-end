import { CompanydetailsModule } from './../../../companydetails/companydetails.module';
import { IpodetailsModule } from '../../../ipodetails/ipodetails.module';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AuthService } from '../../../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss']
})


export class ManagecompanyComponent implements OnInit {

  companyDetails : CompanydetailsModule;
  isPresent:Boolean = false;
  companyname : Text;

  request : any;
  response : any;

  responsepage : string[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    const CompanyUpdateObserver = {
      next: x => console.log('Updated the Company'),
      error: err => console.log(err)
    };
      let dat = this.authService.updateCompany(this.companyDetails).subscribe(CompanyUpdateObserver);
      // dat.subscribe(data=>this.companyDetails=data);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }

}

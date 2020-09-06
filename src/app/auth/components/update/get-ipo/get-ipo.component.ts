import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IpodetailsModule } from 'src/app/ipodetails/ipodetails.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-ipo',
  templateUrl: './get-ipo.component.html',
  styleUrls: ['./get-ipo.component.scss']
})
export class GetIpoComponent implements OnInit {

  ipodetails : IpodetailsModule[];
  isPresent:Boolean = false;
  companyname : Text;
  id : number;

  request : any;
  response : any;

  responsepage : string[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
      this.request = {
        "companyName" : this.companyname
      }
      let dat = this.authService.getIpo(this.request);
      dat.subscribe(data=>this.ipodetails=data);
      // console.log(typeof this.ipodetails);
      //  this.response.Object_forEach(element => {
      //    this.responsepage.push(element.remarks)
      // });
  }

  onDelete() {
    this.request = {
      "id" : this.id
    }
    const IpoDeleteObserver = {
      next: x => console.log('Deleted the Ipo'),
      error: err => console.log(err)
    };
    this.authService.deleteIpo(this.request).subscribe(IpoDeleteObserver);
    this.request = null;
  }
}
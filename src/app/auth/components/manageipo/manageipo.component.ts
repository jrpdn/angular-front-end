import { AuthService } from 'src/app/shared/services/auth.service';
import { IpodetailsModule } from 'src/app/ipodetails/ipodetails.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manageipo',
  templateUrl: './manageipo.component.html',
  styleUrls: ['./manageipo.component.scss']
})
export class ManageipoComponent implements OnInit {

  constructor(private authService:AuthService) { }
  ipodetails : IpodetailsModule;

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const IpoUpdateObserver = {
      next: x => console.log('Updated the ipo'),
      error: err => console.log(err)
    };
    let tkn = this.authService.updateIpo(this.ipodetails).subscribe(IpoUpdateObserver);
  }

}

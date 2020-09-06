import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule, NgForm} from '@angular/forms';
import { UserpageComponent } from './components/userpage/userpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ManagecompanyComponent } from './components/managecompany/managecompany.component';
import { ManageexchangeComponent } from './components/manageexchange/manageexchange.component';
import { ManageipoComponent } from './components/manageipo/manageipo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { GetIpoComponent } from './components/update/get-ipo/get-ipo.component';
import { GetCompanyComponent } from './components/update/get-company/get-company.component';
import { GetStocksComponent } from './components/update/get-stocks/get-stocks.component';
import { ManagestocksComponent } from './components/managestocks/managestocks.component';
import { GetStockExchangeComponent } from './components/update/get-stock-exchange/get-stock-exchange.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, UserpageComponent, AdminpageComponent, ManagecompanyComponent, ManageexchangeComponent, ManageipoComponent, ProfileComponent, IpoComponent, GetIpoComponent, GetCompanyComponent, GetStocksComponent, ManagestocksComponent, GetStockExchangeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent, RegisterComponent, ResetPasswordComponent
  ]
})
export class AuthModule { 
  
}

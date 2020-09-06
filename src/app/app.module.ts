import { StockdetailsModule } from './stockdetails/stockdetails.module';
import { SectordetailsModule } from './sectordetails/sectordetails.module';
import { SectorexchangeModule } from './sectorexchange/sectorexchange.module';
import { UserdetailsModule } from './userdetails/userdetails.module';
import { CompanydetailsModule} from './companydetails/companydetails.module';
import { IpodetailsModule } from './ipodetails/ipodetails.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    AuthModule,
    HttpClientModule,
    IpodetailsModule,
    CompanydetailsModule,
    UserdetailsModule,
    SectorexchangeModule,
    SectordetailsModule,
    StockdetailsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

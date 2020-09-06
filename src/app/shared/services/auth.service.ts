import { SectorexchangeModule } from './../../sectorexchange/sectorexchange.module';
import { CompanydetailsModule } from './../../companydetails/companydetails.module';
import { IpodetailsModule } from './../../ipodetails/ipodetails.module';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { StockdetailsModule } from 'src/app/stockdetails/stockdetails.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/";
  authUrl1 = "http://localhost:8082/";

  token : any;
  constructor(private http : HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'authenticate' ,model,{responseType:'json'});
  }

  register(model: any) {
    return this.http.post(this.authUrl + 'users/add', model);
  }

  tokenStorage(model : any) {
    this.token ='Bearer '+ model;
  }

  updateIpo(model: any) {
      const headers = new HttpHeaders().set("Authorization",this.token);
      return this.http.put(this.authUrl1 + 'ipos/update', model); 
  }

  getIpo(model : any) {
    const headers = new HttpHeaders().set("Authorization",this.token);
    return this.http.post<IpodetailsModule[]>(this.authUrl1 + 'ipos/company',model,{headers: headers,responseType:'json'});
  }

  updateCompany(model: any) {
    const headers = new HttpHeaders().set("Authorization",this.token);
    return this.http.put(this.authUrl1 + 'companies/update', model,{headers: headers,responseType:'json'}); 
}
   
getCompany(model : any) {
  const headers = new HttpHeaders().set("Authorization",this.token);
  return this.http.post<CompanydetailsModule[]>(this.authUrl1 + 'companies/companyName',model,{headers: headers,responseType:'json'});
}
  
getStocks(model : any) {
  const headers = new HttpHeaders().set("Authorization",this.token);
  return this.http.post<StockdetailsModule[]>(this.authUrl1 + 'stocks/seName',model,{headers: headers,responseType:'json'});
}

updateStocks(model: any) {
  const headers = new HttpHeaders().set("Authorization",this.token);
  return this.http.put(this.authUrl1 + 'stocks/update', model,{headers: headers,responseType:'json'}); 
}

getStockExchange(model : any) {
  const headers = new HttpHeaders().set("Authorization",this.token);
  return this.http.post<SectorexchangeModule[]>(this.authUrl1 + 'se',model,{headers: headers,responseType:'json'});
}

updateStockExchange(model: any) {
  const headers = new HttpHeaders().set("Authorization",this.token);
  return this.http.put(this.authUrl1 + 'se/update', model,{headers: headers,responseType:'json'}); 
}
}

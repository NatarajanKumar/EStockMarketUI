import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url = "https://localhost:44356/api/Networth/ViewStockHoldings?id=1";
  sellAssetsUrl = "https://localhost:44356/api/Networth/SellAssets";
  constructor(private http:HttpClient) { }

  displayMyStocks()
  {
    console.log('display stocks inside service called');
    return this.http.get(this.url);

  }

  sendSaleData(portfolioId:number,stockName:string, stockCount:number):Observable<string>
  {
    console.log('calling api');
    let url = this.sellAssetsUrl+'?portfolioId='+portfolioId+'&assetName='+stockName+'&unitsToSell='+stockCount;
    return this.http.post<string>(url,

      {

          headers:new HttpHeaders({

          'Content-Type':'application/text;charset=UTF-8',

          'Access-Control-Allow-Origin':'*',

          'Access-Control-Allow-Method':'*',

          'Authorization':'Bearer '+localStorage.getItem("jwt")

        })

    }


  )};
}

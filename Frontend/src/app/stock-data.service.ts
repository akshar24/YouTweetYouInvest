import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private url: string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart'
  private key: string = '25d94db261msh7b9cf5c84c70cccp14f52ajsne084fef5c9fc'
  constructor(private http: HttpClient) { 


  }


  getStockData(stock: string, range: string, region: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.key,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    })
    const params = new HttpParams().append("symbol", stock).append("region", region).append("range", range).append("interval", "1d")
    return this.http.get(this.url, {
      params: params,
      headers: headers
    })
  }

}

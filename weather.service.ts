import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public host = environment.apiUrl;
  public key = environment.apiKey;

  constructor(private http: HttpClient) { }

  public getWeatherReportLagos(): Observable<HttpResponse<any>> {
    return this.http.get<any>
      (`${this.host}?q=lagos&appid=${this.key}&units=metric`, { observe: 'response' });

  }
  public getWeatherReportIbadan(): Observable<HttpResponse<any>> {
    return this.http.get<any>
      (`${this.host}?q=ibadan&appid=${this.key}&units=metric`, { observe: 'response' });

  }
  public getWeatherReportOsogbo(): Observable<HttpResponse<any>> {
    return this.http.get<any>
      (`${this.host}?q=osogbo&appid=${this.key}&units=metric`, { observe: 'response' });

  }
}

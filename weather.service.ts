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

  public getWeatherReportLagos(city: string): Observable<HttpResponse<any>> {
    return this.http.get<any>
      (`${this.host}?q=${city}&appid=${this.key}&units=metric`, { observe: 'response' });

  }
  public getWeatherReportIbadan(city: string): Observable<HttpResponse<any>> {
    return this.http.get<any>
      (`${this.host}?q=${city}&appid=${this.key}&units=metric`, { observe: 'response' });

  }
  public getWeatherReportOsogbo(city: string): Observable<HttpResponse<any>> {
    return this.http.get<any>
      (`${this.host}?q=${city}&appid=${this.key}&units=metric`, { observe: 'response' });

  }
}

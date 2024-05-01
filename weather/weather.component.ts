import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CustomResponse } from '../custom-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {


  private subscriptions: Subscription[] = [];

  cityWeatherLagos: CustomResponse = new CustomResponse;
  cityWeatherIbadan: CustomResponse = new CustomResponse;
  cityWeatherOsogbo: CustomResponse = new CustomResponse;
  city: string[] = ["Lagos", "ibadan", "osogbo"];
  citiesWeather: CustomResponse[] = [];

  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
    this.getWeatherReportLagos(this.city[0]);
    this.getWeatherReportIbadan(this.city[1]);
    this.getWeatherReportOsogbo(this.city[2]);

  }

  getWeatherReportLagos(city: string): void {

    this.subscriptions.push(
      this.weatherService.getWeatherReportLagos(city).subscribe({
        next: (response: HttpResponse<any>) => {

          this.cityWeatherLagos.cityName = response.body.name;
          this.cityWeatherLagos.temperature = response.body.main.temp;
          this.cityWeatherLagos.windSpeed = response.body.wind.speed;
          this.cityWeatherLagos.description = response.body.weather[0].description;
          this.cityWeatherLagos.imageUrl = `https://openweathermap.org/img/wn/${response.body.weather[0].icon}@2x.png`;
          this.cityWeatherLagos.humdity = response.body.main.humidity;

          this.citiesWeather.push(this.cityWeatherLagos);

        },
        error: (errorResponse: HttpErrorResponse) => {

        },

        complete() {

        },
      })
    )





  }

  getWeatherReportIbadan(city: string): void {

    this.subscriptions.push(
      this.weatherService.getWeatherReportIbadan(city).subscribe({
        next: (response: HttpResponse<any>) => {

          this.cityWeatherIbadan.cityName = response.body.name;
          this.cityWeatherIbadan.temperature = response.body.main.temp;
          this.cityWeatherIbadan.windSpeed = response.body.wind.speed;
          this.cityWeatherIbadan.description = response.body.weather[0].description;
          this.cityWeatherIbadan.imageUrl = `https://openweathermap.org/img/wn/${response.body.weather[0].icon}@2x.png`;
          this.cityWeatherIbadan.humdity = response.body.main.humidity;

          this.citiesWeather.push(this.cityWeatherIbadan);
        },
        error: (errorResponse: HttpErrorResponse) => {

        },

        complete() {

        },
      })
    )



  }

  getWeatherReportOsogbo(city: string): void {

    this.subscriptions.push(
      this.weatherService.getWeatherReportOsogbo(city).subscribe({
        next: (response: HttpResponse<any>) => {

          this.cityWeatherOsogbo.cityName = response.body.name;
          this.cityWeatherOsogbo.temperature = response.body.main.temp;
          this.cityWeatherOsogbo.windSpeed = response.body.wind.speed;
          this.cityWeatherOsogbo.description = response.body.weather[0].description;
          this.cityWeatherOsogbo.imageUrl = `https://openweathermap.org/img/wn/${response.body.weather[0].icon}@2x.png`;
          this.cityWeatherOsogbo.humdity = response.body.main.humidity;

          this.citiesWeather.push(this.cityWeatherOsogbo);
        },
        error: (errorResponse: HttpErrorResponse) => {

        },

        complete() {

        },
      })
    )



  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}



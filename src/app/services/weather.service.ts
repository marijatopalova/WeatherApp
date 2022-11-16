import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(environment.weatherApiBaseUrl, { 
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, 
        environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, 
        environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('mode', 'json')
    })
  }
}

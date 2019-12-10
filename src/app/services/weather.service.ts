import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// https://rapidapi.com/community/api/open-weather-map/endpoints
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWheather() {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host':  'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'f39e85f34bmsh7d71d4457c1b593p1aa362jsn35b5005904ee'
      })
    };

    const url = 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=växjö&cnt=5&units=metric';
    return this.http.get(url, httpOptions);
  }
}

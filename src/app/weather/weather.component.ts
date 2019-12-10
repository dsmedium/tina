import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecasts: Array<any> = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWheather()
      .subscribe(
        data => {
          this.createWeatherForecasts(data);
        },
        err => console.error(err)
      );
  }

  createWeatherForecasts(data) {
    data = data.list;
    for (let i = 0; i < data.length; i ++) {
      const dayStr = new Date(data[i].dt*1000).getDay();
      const forecastObj = {day: this.formatDay(dayStr), temp: data[i].temp.day, description: data[i].weather[0].main};
      this.forecasts.push(forecastObj);
    }
  }

  formatDay(day) {
    let result = '';
    switch (day) {
      case 1:
        result = 'Mon';
        break;
      case 2:
        result = 'Tue';
        break;
      case 3:
        result = 'Wed';
        break;
      case 4:
        result = 'Thu';
        break;
      case 5:
        result = 'Fri';
        break;
      case 6:
        result = 'Sat';
        break;
      case 0:
        result = 'Sun';
        break;
    }
    return result;
  }

}

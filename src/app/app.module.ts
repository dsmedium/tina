import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherComponent } from './weather/weather.component';
import { CareerComponent } from './career/career.component';
import { CareerResultComponent } from './career/career-result/career-result.component';
import { TwitterComponent } from './twitter/twitter.component';
import { MoovieComponent } from './moovie/moovie.component';
import { ParkingComponent } from './parking/parking.component';
import { TwitterService } from './twitter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    CareerComponent,
    CareerResultComponent,
    TwitterComponent,
    MoovieComponent,
    ParkingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
    })
  ],
  providers: [TwitterService],
  entryComponents: [CareerResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

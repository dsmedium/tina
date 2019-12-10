import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  park :string;
  lat : string;
  lng : string;

  constructor(private twitterService : TwitterService) { }
  handleClick(){
    this.twitterService. getTweet().subscribe(data => {
      console.log('Long : '+ JSON.stringify(data));
      this.park = data.name;
      this.lat = data.lat;
      this.lng = data.lng ;

    });
  }
  ngOnInit() {
  }

}

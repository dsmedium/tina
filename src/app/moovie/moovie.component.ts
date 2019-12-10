import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-moovie',
  templateUrl: './moovie.component.html',
  styleUrls: ['./moovie.component.scss']
})
export class MoovieComponent implements OnInit {

  director : string;
  runtime : string;
  genre : string;

  constructor(private twitterService : TwitterService) { }

  handleClick(movievalue){
    var p = '{"movie" : "'+movievalue+'" }';
    console.log("This is tweet" , JSON.parse(p));
    this.twitterService.postMovie(JSON.parse(p)).subscribe(data => {
      this.director  = data.director;
      this.genre = data.genre;
      this.runtime = data.runtime;
      console.log("This is data" , data);
    });
  }

  ngOnInit() {
  }

}

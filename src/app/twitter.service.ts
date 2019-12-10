import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  postTweet(p) {
    return this.http.post('https://nizami-api.herokuapp.com/twitter',p,httpOptions);
  }

  postMovie(p) {
    return this.http.post('https://nizami-api.herokuapp.com/movie',p,httpOptions);
  }

  getTweet(){
    return this.http.get('https://nizami-api.herokuapp.com/parking',httpOptions);
  }

  constructor(private http: HttpClient) { }
}

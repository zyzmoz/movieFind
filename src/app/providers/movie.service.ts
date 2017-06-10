import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  apiKey : string;
  apiUrl : string;
  constructor(private _jsonp: Jsonp) { 
    this.apiKey = '650f531408404ce9093ce537bc46ef9c';
    this.apiUrl = 'https://api.themoviedb.org/3/';
    console.log('Movie Service Initialized');

  }

  getPopular(){
    return this._jsonp.get(this.apiUrl + 'discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey )  
      .map(res => res.json());
  }

  getInTheaters(){
    var date = new Date();
    var lte = date.toISOString().slice(0,10).toString();
    date.setDate(date.getDate() - 15);
    var gte = date.toISOString().slice(0,10).toString();   
    
    return this._jsonp.get(this.apiUrl + 'discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='+gte+'&primary_release_date.lte='+lte+'&api_key='+ this.apiKey)
      .map(res => res.json());
    

  }

   searchMovies(str : string){
     return this._jsonp.get(this.apiUrl + 'search/movie?callback=JSONP_CALLBACK&query='+str+ '&sort_by=popularity.desc&api_key='+ this.apiKey)
      .map(res => res.json());

  }

  getMovie(id: string){
    return this._jsonp.get(this.apiUrl + 'movie/'+id+'?callback=JSONP_CALLBACK&api_key=' + this.apiKey )  
      .map(res => res.json());

  }

}

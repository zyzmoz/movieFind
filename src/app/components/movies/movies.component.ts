import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  popularList  : Array<Object>;
  theaterList : Array<Object>;  

  constructor(private _movieService: MovieService) { 
    this._movieService.getInTheaters()
      .subscribe(res => {
        this.theaterList = res.results;      
      });
    this._movieService.getPopular()
      .subscribe(res => {
        this.popularList = res.results;        
      });



  }

  ngOnInit() {
  }

}

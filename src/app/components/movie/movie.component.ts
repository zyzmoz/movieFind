import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie : Object;
  constructor(private router : ActivatedRoute, private _movieService : MovieService) { 

  }

  ngOnInit() {
    this.router.params
      .subscribe((params) => {
        let id = params['id'];
        this._movieService.getMovie(id)
          .subscribe(res => {
            console.log(res);
            
            this.movie = res;
          })
      });
  }

}

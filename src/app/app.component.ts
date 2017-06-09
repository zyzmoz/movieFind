import { Component } from '@angular/core';
import { MovieService } from './providers/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent {
  title = 'app';
  

}

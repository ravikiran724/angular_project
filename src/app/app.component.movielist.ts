import {Component, Input} from '@angular/core';
import { Movie } from './app.component.movie';
import { MovieService } from './app.component.MovieService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './app.component.movielist.html',
})
export class MovieListComponent {
 @Input() filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  // handleClick(movie: Movie) {
  //
  // }
}

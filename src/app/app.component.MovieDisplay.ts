import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie} from './app.component.movie'
import { MovieService } from './app.component.MovieService'; // Replace './path/to/movie.service' with the actual relative path to your MovieService

@Component({
  selector: 'app-display-movie',
  templateUrl: './app.component.MovieDisplay.html'
})

export class MovieDisplay {
  movies: Movie[]=[];
  @Output() clickButton = new EventEmitter<any>();

  constructor(private movieService: MovieService) {}

  buttonClickedd() {
    this.clickButton.emit(true);
  }
}

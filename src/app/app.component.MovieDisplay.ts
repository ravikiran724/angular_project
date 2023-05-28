import { Component, OnInit } from '@angular/core';
import {Movie} from './app.component.movie'
import { MovieService } from './app.component.MovieService'; // Replace './path/to/movie.service' with the actual relative path to your MovieService

@Component({
  selector: 'app-display-movie',
  templateUrl: './app.component.MovieDisplay.html'
})

export class MovieDisplay implements OnInit {
  movies: Movie[]=[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    console.log("here");
    const csvUrl = 'assets/tmdb-movies.csv'; // Replace 'path/to/movie.csv' with the actual relative path to your CSV file
    this.movieService.getMoviesFromCSV(csvUrl).subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      },
      error => {
        console.log('Error loading movies:', error);
      }
    );
  }
}

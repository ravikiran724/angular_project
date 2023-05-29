import { Component } from '@angular/core';
import {Movie} from "./app.component.movie";
import {MovieService} from "./app.component.MovieService";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  filteredMovies: Observable<Movie[]>;
  output:Movie[] = []

  constructor(private movieService: MovieService) {
    this.filteredMovies = this.movieService.getMoviesFromCSV("assets/tmdb-movies.csv")
  }

  filterMovies(filters: any) {
    const { genre, releaseYearFrom,releaseYearTo, cast, director, numberOfRecords } = filters;
    this.filteredMovies = this.movieService.getMoviesFromCSV("assets/tmdb-movies.csv")
    this.filteredMovies.subscribe(mov=>{
      this.output = this.movieService.rankMovies(mov,genre, releaseYearFrom,releaseYearTo, cast, director, numberOfRecords);
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';
import { Movie } from './app.component.movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}


  rankMovies(filteredMovies: Movie[], genre: string, releaseYearFrom: number, releaseYearTo: number, cast: string, director: string, numberOfRecords:number): Movie[] {
    filteredMovies.forEach(movie => {

      const release_year = movie.release_year;

      let year = parseInt(release_year, 10);

      if (!movie.genres.includes(genre)) {
        movie.relevence -= 10;
      }
      if (!movie.director.includes(director)) {
        movie.relevence -= 10;
      }
      if (!movie.cast.includes(cast)) {
        movie.relevence -= 10;
      }
      if (year<=releaseYearFrom || year>=releaseYearTo) {
        movie.relevence -= 10;
      }

      // if (casr.includes(movie.cast)) {
      //   movie.relevence -= 10;
      // }
      // Deduct 10 points for each filter field not met
      // Add additional ranking logic as needed (e.g., budget, revenue, etc.)
    });

    // Sort movies by relevance (and other ranking fields if needed)
    filteredMovies.sort((a, b) => b.relevence - a.relevence);

    return filteredMovies.slice(0, numberOfRecords);
  }

  getMoviesFromCSV(csvUrl: string): Observable<Movie[]> {
    return this.http.get(csvUrl, { responseType: 'text' }).pipe(
      map(csvData => {
        const moviesArray: Movie[] = [];
        const parsedData = Papa.parse<{ id: string; imdb_id: string; popularity: string; budget: string; revenue:string; original_title:string; cast:string; homepage:string; director:string; tagline:string; keywords:string; overview:string; runtime:string; genres:string; production_companies:string; release_date:string; vote_count:string; vote_average:string; release_year:string; budget_adj:string; revenue_adj:string }>(csvData, { header: true }).data;

        for (const row of parsedData) {
          const movie = new Movie(
            row.id,
            row.imdb_id,
            row.popularity,
            row.budget,
            row.revenue,
            row.original_title,
            row.cast,
            row.homepage,
            row.director,
            row.tagline,
            row.keywords,
            row.overview,
            row.runtime,
            row.genres,
            row.production_companies,
            row.release_date,
            row.vote_count,
            row.vote_average,
            row.release_year,
            row.budget_adj,
            row.revenue_adj
          );
          moviesArray.push(movie);
        }

        return moviesArray;
      })
    );
  }
}

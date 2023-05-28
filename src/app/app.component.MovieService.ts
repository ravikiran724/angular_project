import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';
import { Movie } from './app.component.movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMoviesFromCSV(csvUrl: string): Observable<Movie[]> {
    return this.http.get(csvUrl, { responseType: 'text' }).pipe(
      map(csvData => {
        const moviesArray: Movie[] = [];
        const parsedData = Papa.parse<{ original_title: string; release_date: string; director: string; overview: string }>(csvData, { header: true }).data;

        for (const row of parsedData) {
          const movie = new Movie(
            row.original_title,
            row.release_date,
            row.director,
            row.overview
          );
          moviesArray.push(movie);
        }

        return moviesArray;
      })
    );
  }
}

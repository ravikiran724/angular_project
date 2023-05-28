export class Movie {
  title: string;
  releaseDate: string;
  director: string;
  description: string;

  constructor(title: string, releaseDate: string, director: string, description: string) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.director = director;
    this.description = description;
  }
}

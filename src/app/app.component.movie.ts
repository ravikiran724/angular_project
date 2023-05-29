export class Movie {
  id:string;
  imdb_id:string;
  popularity:string;
  budget:string;
  revenue:string;
  original_title:string;
  cast:string;
  homepage:string;
  director:string;
  tagline:string;
  keywords:string;
  overview:string;
  runtime:string;
  genres:string;
  production_companies:string;
  release_date:string;
  vote_count:string;
  vote_average:string;
  release_year:string;
  budget_adj:string;
  revenue_adj:string;
  relevence:number;

  constructor(id: string, imdb_id: string, popularity: string, budget: string, revenue:string, original_title:string, cast:string, homepage:string, director:string, tagline:string, keywords:string, overview:string, runtime:string, genres:string, production_companies:string, release_date:string, vote_count:string, vote_average:string, release_year:string, budget_adj:string, revenue_adj:string) {
    this.id =
    this.imdb_id = imdb_id;
    this.popularity = popularity;
    this.budget = budget;
    this.revenue = revenue;
    this.relevence = 100;
    this.original_title = original_title;
    this.cast = cast;
    this.homepage = homepage;
    this.director = director;
    this.tagline = tagline;
    this.keywords = keywords;
    this.overview = overview;
    this.runtime = runtime;
    this.genres = genres;
    this.production_companies = production_companies;
    this.release_date = release_date;
    this.vote_count = vote_count;
    this.vote_average = vote_average;
    this.release_year = release_year;
    this.budget_adj = budget_adj;
    this.revenue_adj = revenue_adj;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const withBaseUrl = path => `https://api.themoviedb.org/3/${path}?api_key=d416af5d4faee64e25ab001d87aab5c3`;

export interface IMovieItem {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface IMoviesResult {
  results: Array<IMovieItem>;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getPopular(): Observable<any> {
    return this.http.get<IMoviesResult>(withBaseUrl('movie/popular'));
  }
}

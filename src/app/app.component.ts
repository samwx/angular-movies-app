import { Component, OnInit } from '@angular/core';
import { MoviesService, IMoviesResult, IMovieItem } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies: Array<IMovieItem>;
  filteredMovies: Array<IMovieItem>;
  moviesFilter = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getPopular()
      .subscribe((moviesList: IMoviesResult) => {
        this.movies = moviesList.results;
        this.filteredMovies = this.movies;
      });
  }

  onMoviesFilter(valueFilter: string): void {
    this.filteredMovies = this.movies
      .filter(m => m.title.toLowerCase().includes(valueFilter.toLowerCase()));
  }
}

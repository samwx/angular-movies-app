import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovieItem } from 'src/app/services/movies.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesStoreService {
  private readonly moviesSubject = new BehaviorSubject<IMovieItem[]>([]);
  readonly movies$ = this.moviesSubject.asObservable();

  private get movies(): IMovieItem[] {
    return this.moviesSubject.getValue();
  }

  private set movies(value: IMovieItem[]) {
    this.moviesSubject.next(value);
  }

  setMovies(movies: IMovieItem[]): void {
    this.movies = movies;
  }

  filterByVoteCount(): void {
    this.movies = [...this.movies].sort((a, b) => b.vote_count - a.vote_count);
  }

  filterByTitle(): void {
    this.movies = [...this.movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
}

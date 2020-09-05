import { Component, OnInit, Input } from '@angular/core';
import { IMovieItem } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  @Input() movies: Array<IMovieItem>;

  constructor() { }
}

import { Component, OnInit, Input } from '@angular/core';
import { IMovieItem } from '../services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: IMovieItem;

  constructor() { }
}

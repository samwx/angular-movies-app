import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moviesFilter = '';
  @Output() filterMovies = new EventEmitter<string>();

  constructor() { }

  onMoviesFilter(value: string): void {
    this.filterMovies.emit(value);
  }
}

import { Component } from '@angular/core';
import { MoviesStoreService } from '../store/movies/movies-store.service';

enum FilterType {
  VoteCount = 'voteCount',
  Title = 'title',
}

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent {
  filterType: FilterType;

  constructor(private moviesStore: MoviesStoreService) { }

  onFilterChange(): void {
    switch (this.filterType) {
      case FilterType.VoteCount:
        this.moviesStore.filterByVoteCount();
        break;
      case FilterType.Title:
        this.moviesStore.filterByTitle();
        break;
    }
  }
}

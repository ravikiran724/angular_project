import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './app.component.filter.html'
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  selectedGenre: string = '';
  selectedReleaseYearFrom: number | null = null;
  selectedReleaseYearTo: number | null = null;
  selectedCast: string = '';
  selectedDirector: string = '';
  numberOfRecords: number | null = null;

  applyFilters() {
    const filters = {
      genre: this.selectedGenre,
      releaseYearFrom: this.selectedReleaseYearFrom,
      releaseYearTo:this.selectedReleaseYearTo,
      cast: this.selectedCast,
      director: this.selectedDirector,
      numberOfRecords: this.numberOfRecords
    };

    this.filterChanged.emit(filters);
  }
}

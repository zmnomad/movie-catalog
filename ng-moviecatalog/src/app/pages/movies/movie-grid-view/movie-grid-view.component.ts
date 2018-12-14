import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../classes/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-grid-view',
  templateUrl: './movie-grid-view.component.html',
  styleUrls: ['./movie-grid-view.component.css']
})
export class MovieGridViewComponent implements OnInit {

  private movies: Movie[];
  private _filteredMovies: Movie[];
  searchTerm: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(
      (movies) => {
        this.movies = <Movie[]> movies;
        this.filteredMovies = this.movies;
      });
  }

  searchMovie(searchTerm) {
    this.filteredMovies = this.movies.filter(
      movie => movie.title.toUpperCase().includes(searchTerm.toUpperCase())
    );
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchMovie(this.searchTerm);
  }

  get filteredMovies(): Movie[] {
    return this._filteredMovies;
  }

  set filteredMovies(value: Movie[]) {
    this._filteredMovies = value;
  }
}

import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../classes/movie';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.css']
})
export class MovieListViewComponent implements OnInit {

  private movies: Movie[];
  private filteredMovies: Movie[];
  private _currentMovie: Movie;

  private _currentPage: Movie[];
  private _page = 1;
  private pageSize = 5;
  private _pageCount: number;
  private _pageNumbers: number[];

  constructor(private movieService: MovieService, private router: Router) { }
  searchTerm: string;

    ngOnInit() {
      this.movieService.getAllMovies().subscribe(
        (movies) => {
          this.movies = <Movie[]>movies;
          this.filteredMovies = this.movies;
          this.refresh();
        });
    }

    selectMovie(a) {
      this._currentMovie = a;
    }

    searchMovie(searchTerm) {
      this.filteredMovies = this.movies.filter(
        movie => movie.title.toUpperCase().includes(searchTerm.toUpperCase())
      );
      this.refresh();
    }

    resetSearch() {
      this.searchTerm = '';
      this.searchMovie(this.searchTerm);
    }

    checkRandomMovie() {
      const randomId = Math.floor(Math.random() * this.movies.length);
      this._currentMovie = this.movies[randomId];
    }

    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
      this.refresh();
    }

    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
      this.refresh();
    }

    goToPage(page: number) {
      if (page > 0 && page <= this.pageCount) {
        this.page = page;
      }
      this.refresh();
    }

    refresh() {
      this.pageCount = Math.ceil(this.filteredMovies.length / this.pageSize);
      this.refreshPage();
      this.refreshPageNumbers();
    }

    refreshPageNumbers() {
      this._pageNumbers = [];
      if (this.pageCount < 5) {
        for (let i = 2; i < this.pageCount; i++) {
          this._pageNumbers.push(i);
        }
      } else {
        if (this.page < 3) { // at the beginning
          this._pageNumbers.push(2, 3);
        } else if (this.page > this.pageCount - 2) { // at the end
          this._pageNumbers.push(this.pageCount - 2, this.pageCount - 1);
        } else { // somewhere in the middle
          this._pageNumbers.push(this.page - 1, this.page, this.page + 1);
        }
      }
    }

  refreshPage() {
    const begin = (this.page - 1) * this.pageSize;
    const end = this.page * this.pageSize;
    this._currentPage = this.filteredMovies.slice(begin, end);
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get currentMovie(): Movie {
    return this._currentMovie;
  }

  get pageNumbers(): number[] {
    return this._pageNumbers;
  }

  get currentPage(): Movie[] {
    return this._currentPage;
  }
}

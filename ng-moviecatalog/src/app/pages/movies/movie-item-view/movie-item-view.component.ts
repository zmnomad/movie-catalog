import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../classes/movie';
import { Director } from '../../../classes/director';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../../services/review.service';
import { Review } from '../../../classes/review';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-movie-item-view',
  templateUrl: './movie-item-view.component.html',
  styleUrls: ['./movie-item-view.component.css']
})
export class MovieItemViewComponent implements OnInit {
  private _movie: Movie;
  private _directorNames: string;

  reviewForm: FormGroup = new FormGroup({
    rating: new FormControl('1'),
    review: new FormControl('', [Validators.required, Validators.minLength(40)])
  });
  refreshReviews = 0;
  done = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private reviewService: ReviewService,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id).subscribe(
      (movie) => {
        this.movie = movie as Movie;
        this.buildDirectorNames(this.movie.directors);
      } );
  }

  buildDirectorNames(directorArray: Director[]) {
    this.directorNames = directorArray[0].name;
    for (let i = 1; i < directorArray.length; ++i) {
      this.directorNames += `, ${directorArray[i].name}`;
    }
  }

  removeMovie(movieId: number) {
    this.movieService.deleteMovie(movieId).subscribe(
      () => {
        this.router.navigate(['/movies']);
      },
      err => console.log(err)
    );
  }

  submitReview() {
    this.reviewService.addReview(new Review(
      this.authService.user,
      new Movie(this.movie.id),
      this.review.value,
      this.rating.value)
    ).subscribe(
      () => {
        this.done = true;
        this.reviewForm.reset();
        this.refreshReviews++;
      },
          err => console.log(err)
      );
  }

  get authService(): AuthenticationService {
    return this._authService;
  }

  get rating(): AbstractControl {
    return this.reviewForm.get('rating');
  }

  get review(): AbstractControl {
    return this.reviewForm.get('review');
  }

  get movie(): Movie {
    return this._movie;
  }

  set movie(value: Movie) {
    this._movie = value;
  }

  get directorNames(): string {
    return this._directorNames;
  }

  set directorNames(value: string) {
    this._directorNames = value;
  }
}

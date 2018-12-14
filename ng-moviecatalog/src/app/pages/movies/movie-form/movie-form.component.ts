import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../../classes/movie';
import { Director } from '../../../classes/director';
import { DirectorService } from '../../../services/director.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  private _movie: Movie = new Movie();
  private _edit: boolean;
  error: boolean;
  private _directors: Director[];

  movieForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    director: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    pDate: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(2020)])
  });

  constructor(private movieService: MovieService,
              private directorService: DirectorService,
              private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.directorService.getAllDirectors().subscribe(
      directors => this._directors = directors as Director[]
    );
    const id = +this.route.snapshot.params['id'];
    if (id && this.authService.isAdmin()) {
      this.edit = true;
      this.movieService.getMovieById(id).subscribe(
        movie => {
          this.movie = movie;
        });
    } else {
      this.movie.directors = [];
      this.movie.directors.push(new Director());
    }
  }

  submit(movie: Movie) {
    movie.publicationDate = new Date(+movie.publicationDate, 0).toISOString();
    if (this.edit) {
      this.movieService.updateMovie(movie).subscribe(
        resMovie => this.router.navigate([`/movie/${resMovie.id}`]),
        () => this.error = true
      );
    } else {
      this.movieService.addMovie(movie).subscribe(
        () => this.router.navigate(['/movies']),
        () => this.error = true
      );
    }
  }

  get edit(): boolean {
    return this._edit;
  }

  set edit(value: boolean) {
    this._edit = value;
  }

  get title(): AbstractControl {
    return this.movieForm.get('title');
  }

  get director(): AbstractControl {
    return this.movieForm.get('director');
  }

  get genre(): AbstractControl {
    return this.movieForm.get('genre');
  }
  get pDate(): AbstractControl {
    return this.movieForm.get('pDate');
  }

  get movie(): Movie {
    return this._movie;
  }

  set movie(value: Movie) {
    this._movie = value;
  }

  get directors(): Director[] {
    return this._directors;
  }

  set directors(value: Director[]) {
    this._directors = value;
  }
}

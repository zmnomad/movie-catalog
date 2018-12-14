import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../classes/movie';
import { environment } from '../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Object> {
    return this.http.get(environment.api + environment.routes.getMovies) as Observable<Movie[]>;
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get(`${environment.api}${environment.routes.getMovieById}${id}`) as Observable<Movie>;
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post(environment.api + environment.routes.addMovie, movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put(environment.api + environment.routes.updateMovie, movie);
  }

  deleteMovie(id: number): Observable<Movie[]> {
    return this.http.delete(environment.api + environment.routes.deleteMovie + id);
  }
}

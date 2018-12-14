import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Review } from '../classes/review';
import { environment } from '../../environments/environment';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviewsOfMovie(movieId: number): Observable<Review[]> {
    return this.http.get(`${environment.api}${environment.routes.getReviewsOfMovie}${movieId}`) as Observable<Review[]>;
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post(environment.api + environment.routes.addReview, review) as Observable<Review>;
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(environment.api + environment.routes.deleteReview + id);
  }

}

import { User } from './user';
import { Movie } from './movie';

export class Review {
  user: User;
  movie: Movie;
  review: string;
  rate: number;
  date: Date;

  public constructor(user: User,
                     movie: Movie,
                     review: string,
                     rate: number,
                     date?: Date) {
    this.user = user;
    this.movie = movie;
    this.review = review;
    this.rate = rate;
    this.date = date;
  }
}

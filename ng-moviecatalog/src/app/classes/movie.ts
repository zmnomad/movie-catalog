import { Director } from './director';

export class Movie {
  id: number;
  title: string;
  genre: string;
  publicationDate: string;
  directors: Director[];

  public constructor(id?: number,
                     title?: string,
                     genre?: string,
                     pdate?: string,
                     directors?: Director[]) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.publicationDate = pdate;
    this.directors = directors;
  }
}

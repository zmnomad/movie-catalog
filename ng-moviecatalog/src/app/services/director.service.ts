import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Director } from '../classes/director';
import { environment } from '../../environments/environment';

@Injectable()
export class DirectorService {

  constructor(private http: HttpClient) { }

  getAllDirectors(): Observable<Director[]> {
    return this.http.get(environment.api + environment.routes.getDirectors) as Observable<Director[]>;
  }

  getDirectorById(id: number): Observable<Director> {
    return this.http.get(`${environment.api}${environment.routes.getDirectorById}${id}`) as Observable<Director>;
  }

  updateDirector(director: Director): Observable<Director> {
    return this.http.put(environment.api + environment.routes.updateDirector, director) as Observable<Director>;
  }

  addDirector(director: Director): Observable<Director> {
    return this.http.post(environment.api + environment.routes.addDirector, director) as Observable<Director>;
  }

  deleteDirector(id: number): Observable<Director[]> {
    return this.http.delete(environment.api + environment.routes.deleteDirector + id) as Observable<Director[]>;
  }
}

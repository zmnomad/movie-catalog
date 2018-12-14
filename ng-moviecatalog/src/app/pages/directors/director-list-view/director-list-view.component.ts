import { Component, OnInit } from '@angular/core';
import { Director } from '../../../classes/director';
import { DirectorService } from '../../../services/director.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-director-list-view',
  templateUrl: './director-list-view.component.html',
  styleUrls: ['./director-list-view.component.css']
})
export class DirectorListViewComponent implements OnInit {
  searchTerm: string;

  private directors: Director[];
  private filteredDirectors: Director[];
  private _currentDirector: Director;

  private _currentPage: Director[];
  private _page = 1;
  private pageSize = 5;
  private _pageCount: number;
  private _pageNumbers: number[];

  constructor(private directorService: DirectorService,
              private _authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.directorService.getAllDirectors().subscribe(
      (directors) => {
        this.directors = <Director[]> directors;
        this.filteredDirectors = this.directors;
        this.refresh();
        this.route.queryParams.subscribe(() => {
          this.setDirectorFromQuery();
        });
      });
  }

  removeDirector(directorId: number) {
    this.directorService.deleteDirector(directorId).subscribe(
      () => {
        this.router.navigate(['/directors']);
        this.currentDirector = undefined;
        this.directors = this.directors.filter(director => director.id !== directorId);
        this.filteredDirectors = this.filteredDirectors.filter(director => director.id !== directorId);
        this.refresh();
      },
      err => console.log(err)
    );
  }

  setDirectorFromQuery() {
    const id = +this.route.snapshot.queryParams['id'];
    if (id) {
      this.currentDirector = this.directors.find(director => director.id === id);
    }
  }

  selectDirector(a) {
    this.currentDirector = a;
    this.router.navigate(['/directors'], { queryParams: { id: a.id } });
  }

  searchDirector(searchTerm) {
    this.filteredDirectors = this.directors.filter(
      director => director.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    this.refresh();
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchDirector(this.searchTerm);
  }

  checkRandomDirector() {
    const randomId = Math.floor(Math.random() * this.directors.length);
    this.selectDirector(this.directors[randomId]);
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
    this.pageCount = Math.ceil(this.filteredDirectors.length / this.pageSize);
    this.refreshPage();
    this.refreshPageNumbers();
  }

  refreshPageNumbers() {
    this.pageNumbers = [];
    if (this.pageCount < 5) {
      for (let i = 2; i < this.pageCount; i++) {
        this.pageNumbers.push(i);
      }
    } else {
      if (this.page < 3) { // at the beginning
        this.pageNumbers.push(2, 3);
      } else if (this.page > this.pageCount - 2) { // at the end
        this.pageNumbers.push(this.pageCount - 2, this.pageCount - 1);
      } else { // somewhere in the middle
        this.pageNumbers.push(this.page - 1, this.page, this.page + 1);
      }
    }
  }

  refreshPage() {
    const begin = (this.page - 1) * this.pageSize;
    const end = this.page * this.pageSize;
    this.currentPage = this.filteredDirectors.slice(begin, end);
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }

  get pageNumbers(): number[] {
    return this._pageNumbers;
  }

  set pageNumbers(value: number[]) {
    this._pageNumbers = value;
  }

  get currentDirector(): Director {
    return this._currentDirector;
  }

  set currentDirector(value: Director) {
    this._currentDirector = value;
  }

  get currentPage(): Director[] {
    return this._currentPage;
  }

  set currentPage(value: Director[]) {
    this._currentPage = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }


  get authenticationService(): AuthenticationService {
    return this._authenticationService;
  }
}

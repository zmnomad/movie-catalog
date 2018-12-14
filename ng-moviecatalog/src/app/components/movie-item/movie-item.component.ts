import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  providers: [DatePipe]
})


export class MovieItemComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}

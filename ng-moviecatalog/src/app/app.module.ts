import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from './modules/router/router.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './pages/home/home.component';
import { DirectorListViewComponent } from './pages/directors/director-list-view/director-list-view.component';
import { DirectorService } from './services/director.service';
import { DirectorItemComponent } from './components/director-item/director-item.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListViewComponent } from './pages/movies/movie-list-view/movie-list-view.component';
import { MovieService } from './services/movie.service';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MovieGridViewComponent } from './pages/movies/movie-grid-view/movie-grid-view.component';
import { MovieItemViewComponent } from './pages/movies/movie-item-view/movie-item-view.component';
//import { LoaderComponent } from './components/loader/loader.component';
import { DirectorFormComponent } from './pages/directors/director-form/director-form.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewService } from './services/review.service';
import { MovieFormComponent } from './pages/movies/movie-form/movie-form.component';
import { RouteGuardService } from './services/route-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent,
    DirectorListViewComponent,
    DirectorItemComponent,
    MovieItemComponent,
    MovieListViewComponent,
    MovieGridViewComponent,
    MovieItemViewComponent,
    //LoaderComponent,
    DirectorFormComponent,
    ReviewItemComponent,
    ReviewListComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, RouteGuardService, DirectorService, MovieService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }

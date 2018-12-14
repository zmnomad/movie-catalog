import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { HomeComponent } from '../../pages/home/home.component';
import { DirectorListViewComponent } from '../../pages/directors/director-list-view/director-list-view.component';
import { RegistrationComponent } from '../../pages/registration/registration.component';
import { MovieGridViewComponent } from '../../pages/movies/movie-grid-view/movie-grid-view.component';
import { MovieItemViewComponent } from '../../pages/movies/movie-item-view/movie-item-view.component';
import { DirectorFormComponent } from '../../pages/directors/director-form/director-form.component';
import { MovieFormComponent } from '../../pages/movies/movie-form/movie-form.component';
import { RouteGuardService } from '../../services/route-guard.service';
import { Role } from '../../classes/role';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'directors', component: DirectorListViewComponent },
      { path: 'director/new', component: DirectorFormComponent, data: { roles: [Role.USER, Role.ADMIN] }  },
      { path: 'director/edit/:id', component: DirectorFormComponent, data: { roles: [Role.ADMIN] }  },
      { path: 'movie/:id', component: MovieItemViewComponent },
      { path: 'movies', component: MovieGridViewComponent },
      { path: 'movies/edit/:id', component: MovieFormComponent, data: { roles: [Role.ADMIN] } },
      { path: 'movies/new', component: MovieFormComponent, data: { roles: [Role.USER, Role.ADMIN] } }
    ]
  }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: []
})
export class RouterModule { }

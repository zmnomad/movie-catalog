import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectorService } from '../../../services/director.service';
import { Director } from '../../../classes/director';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getPath } from '../../../../../e2e/getpath';

@Component({
  selector: 'app-director-form',
  templateUrl: './director-form.component.html',
  styleUrls: ['./director-form.component.css']
})
export class DirectorFormComponent implements OnInit {
  private _director: Director = new Director();
  private edit: boolean;
  error: boolean;

  directorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required])
  });

  constructor(private directorService: DirectorService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if (id && this.authenticationService.isAdmin()) {
      this.edit = true;
      this.directorService.getDirectorById(id).subscribe(
        director => this.director = director
      );
    }
    // console.log(getPath());
  }

  submit(director: Director) {
    if (this.edit) {
      this.directorService.updateDirector(this.director).subscribe(
        () => this.router.navigate(['/directors']),
        () => this.error = true
      );
    } else {
      this.directorService.addDirector(director).subscribe(
        () => this.router.navigate(['/directors']),
        () => this.error = true
      );
    }
  }

  get name(): AbstractControl {
    return this.directorForm.get('name');
  }

  get nationality(): AbstractControl {
    return this.directorForm.get('nationality');
  }

  get bio(): AbstractControl {
    return this.directorForm.get('bio');
  }

  get director(): Director {
    return this._director;
  }

  set director(value: Director) {
    this._director = value;
  }
}

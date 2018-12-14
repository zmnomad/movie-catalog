import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  error: boolean;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.authService.register(new User(this.username.value, this.password.value, this.email.value))
      .subscribe(
        () => this.router.navigate(['/login']),
        () => this.error = true
      );
  }

  get username(): AbstractControl {
    return this.regForm.get('username');
  }

  get password(): AbstractControl {
    return this.regForm.get('password');
  }

  get email(): AbstractControl {
    return this.regForm.get('email');
  }

  get user(): User {
    return new User(
      this.username.value,
      this.password.value,
      this.email.value
    );
  }

}

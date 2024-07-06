import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from '../../../models/authentication/auth/login';
import { AuthRequest } from '../../../state-management/actions/authentication/auth/auth-request.actions';
import { isloadingAuth } from '../../../state-management/selectors/auth.selector';
import { GlobalState } from '../../../state-management/states/global.state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm!: FormGroup;
  private userLogin!: Login;
  errors: any[] = [];
  isLoading$: Observable<boolean> = this.store.pipe(select(isloadingAuth));

  constructor(private store: Store<GlobalState>) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.userLogin = Object.assign({}, this.userLogin, this.loginForm.value);
    console.log(this.userLogin);
    this.store.dispatch(new AuthRequest(this.userLogin));
  }
}

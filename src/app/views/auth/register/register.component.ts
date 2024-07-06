import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Register } from '../../../models/authentication/register/register';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { AlertService } from '../../../services/utils/alert.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  providers: [AuthenticationService, AlertService],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  isRequesting = false;
  registerForm!: FormGroup;
  private registerRequest!: Register;
  errors: any[] = [];

  constructor(private router: Router, private authService: AuthenticationService, private alertService: AlertService) {
    this.registerForm = new FormGroup({
      apelido: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/),
      ]),
      password: new FormControl('', [Validators.required]),
    });

  }

  get apelido() {
    return this.registerForm.get('apelido')!;
  }
  get name() {
    return this.registerForm.get('name')!;
  }
  get birthday() {
    return this.registerForm.get('birthday')!;
  }
  get email() {
    return this.registerForm.get('email')!;
  }
  get password() {
    return this.registerForm.get('password')!;
  }

  register() {
    if (this.registerForm.invalid) {

      return;
    }
    this.registerRequest = Object.assign({}, this.registerRequest, this.registerForm.value);

    this.isRequesting = true;


    this.authService.singUp(this.registerRequest).subscribe(
      (response: any) => {

        this.processarSucesso(response);
      },
      (fail: any) => {
        this.processarFalha(fail);
      }
    );
  }


  processarSucesso(response: any) {
    this.errors = [];
    if (response != this.errors) {
    }
    this.isRequesting = false;
    this.alertService.successTimer('Cadastro realizado com sucesso! ', 'sucesso', 2000);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

  processarFalha(fail: any) {
    this.isRequesting = false;
    this.errors = fail.error.errors; // fix for the error
    this.alertService.error(this.errors.toString(), 'Erro no registro'); // convert the array to a string before passing it to the alertService.error() method
  }

}

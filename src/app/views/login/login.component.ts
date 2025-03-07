import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ButtonAnimationDirective } from '../../directives/button-animation.directive';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: 'login.component.css',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    ButtonAnimationDirective,
    FormsModule,
  ],
})
export class LoginComponent {
  // @ts-ignore
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _toastr: ToastrService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const payload = this.loginForm.value;
    this._loginService.doLogin(payload).subscribe({
      next: (res: any) => {
        this.router.navigate(['/admin']);
        this._toastr.success(`Bienvenida ${res.name}`, 'Exito al ingresar', {
          easeTime: 100,
          timeOut: 3000,
        });
      },
      error: (error: Error) => {
        this._toastr.error('Error al ingresar', '', {
          easeTime: 100,
          timeOut: 3000,
        });
      },
    });
  }
}

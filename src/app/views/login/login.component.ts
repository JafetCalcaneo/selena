import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ButtonAnimationDirective } from './button-animation.directive';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: 'login.component.css',
    imports: [MatCardModule, ReactiveFormsModule, ButtonAnimationDirective, FormsModule]
})
export class LoginComponent {
    // @ts-ignore
    loginForm: FormGroup;
    loginFormGroup: FormBuilder = new FormBuilder();
    name: string = '';
    password: string = '';



    constructor(private formBuilder: FormBuilder, private _loginService: LoginService) {
        this.loginForm = this.formBuilder.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        const payload = this.loginForm.value;
        this._loginService.doLogin(payload).subscribe({
            next: (res: any) => console.log('Respuesta', res),
            error: (error: Error) => console.log('Error\n', error)
        })
        
    }


    

}
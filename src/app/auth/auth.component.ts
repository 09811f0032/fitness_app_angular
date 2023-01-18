import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    authForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private authService: AuthService){

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(){
        if(this.authForm.invalid){
            return;
        }
        const email = this.authForm.get('email').value;
        const password = this.authForm.get('password').value;
        console.log(email + password);
        if(this.isLoginMode){
            this.authService.SignIn(email, password);
        }else{
            this.authService.SignUp(email, password);
        }
       
        this.authForm.reset();
    }
}
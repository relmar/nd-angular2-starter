import {Component, FormBuilder, Validators} from 'angular2/angular2'
@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})

export class LoginPage {
  loginForm;
  
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  doLogin(event) {
    console.log(this.loginForm.value); 
    event.preventDefault();
  }
}
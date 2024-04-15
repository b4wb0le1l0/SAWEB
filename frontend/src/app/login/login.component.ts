import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signIn: any = {
    "email": "",
    "password": ""
  }

  signUp: any = {
    "email": "",
    "password": ""
  }

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (this.validateLoginForm()){
      this.clearLoginError();
      this.sendLoginDataToServer();
      this.clearLoginInput();
    }
  }

  registration(){
    if (this.validateSignUp()){
      this.sendRegistrationDataToServer();
    } else {
    }
  }

  private validateSignUp(): boolean {
    const email = (<HTMLInputElement>document.getElementById("email-1")).value;
    const password = (<HTMLInputElement>document.getElementById("pswd-1")).value;
    const emailErrorElement = document.getElementById("email-error");
    const passwordErrorElement = document.getElementById("password-error");
    if (email.length > 5 && password.length > 8) {
      // @ts-ignore
      emailErrorElement.textContent = "";
      // @ts-ignore
      passwordErrorElement.textContent = "";
      return true;
    } else {
      if (email.length <= 5) {
        // @ts-ignore
        emailErrorElement.textContent = "Email should be longer than 5 symbols";
      } else {
        // @ts-ignore
        emailErrorElement.textContent = "";
      }
      if (password.length <= 8) {
        // @ts-ignore
        passwordErrorElement.textContent = "Password should be longer than 8 symbols";
      } else {
        // @ts-ignore
        passwordErrorElement.textContent = "";
      }
      return false;
    }
  }
  private sendLoginDataToServer(){
    this.http.post("http://localhost:8080/api/v1/auth/signin", this.signIn).subscribe(
      (res: any) => {
        localStorage.setItem("Authorization", "Bearer " + res.token);
        // ВОТ ТУТ БУДЕТ РЕДИРЕКТ НА MAIN PAGE
        this.router.navigate(['/main']);
      },
      (error: any) => {
        // @ts-ignore
        document.getElementById("email-error-login").innerHTML = "Invalid email or password";
        localStorage.clear();
      }
    );
  }

  private sendRegistrationDataToServer() {
    this.http.post("http://localhost:8080/api/v1/auth/signup", this.signUp).subscribe(
      (res: any) => {
        // @ts-ignore
        document.getElementById("email-error").textContent = "Successfully registered";
        this.clearFields();
      },
      (error: any) => {
        // @ts-ignore
        document.getElementById("email-error").textContent = "This email is already occupied";
        this.clearFields();
      }
    )
  }

  private clearFields() {
    // @ts-ignore
    document.getElementById("email-1").value = "";
    // @ts-ignore
    document.getElementById("pswd-1").value = "";
  }

  private clearLoginError() {
    // @ts-ignore
    document.getElementById('email-error-login').innerHTML = '';
  }

  private clearLoginInput(){
    // @ts-ignore
    document.getElementById('email-2').value = '';
    // @ts-ignore
    document.getElementById('pswd-2').value = '';
  }

  private validateLoginForm() {
    // @ts-ignore
    const email = document.getElementById('email-2').value;
    const isValidEmail = email.length > 8;
    if (!isValidEmail) {
      // @ts-ignore
      document.getElementById('email-error-login').innerHTML = 'Incorrect a login.';
    } else {
      // @ts-ignore
      document.getElementById('email-error-login').innerHTML = '';
    }
    return isValidEmail;
  }

}

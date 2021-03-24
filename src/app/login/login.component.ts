import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public contactForm: FormGroup;
  email: any
  password: any
  loggonInUser: any
  constructor(private authent: AuthenticationService, private router: Router, private _formBuilder: FormBuilder) {
    this.contactForm = this._formBuilder.group({
      email: "",
      password: ""
    });
  }

  ngOnInit(): void {
    //this.authent.getCurrentUser()

  }


  login() {
    this.authent.signInUser(this.contactForm.value.email, this.contactForm.value.password)
    this.loggonInUser = this.authent.userInfo
    this.router.navigate(['/home']);
  }
  resetpassword(){
    this.router.navigate(['/reset-password'])
  }


}

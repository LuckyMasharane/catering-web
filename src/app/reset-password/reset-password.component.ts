import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 
  public contactForm: FormGroup;
  email:any
  constructor(private _formBuilder: FormBuilder, private authenService: AuthenticationService,private router: Router) { 
    this.contactForm = this._formBuilder.group({
      email: "",
    });
  }

  ngOnInit(): void {
    // this.contactForm = this._formBuilder.group({
    //   email: "",
    // });
  }
  onSubmit() {
    console.log("reset");

    this.authenService.resetPassword(this.contactForm.value.email)
    this.router.navigate(['']);
  }
  cancel(){
    this.router.navigate([''])
  }


}

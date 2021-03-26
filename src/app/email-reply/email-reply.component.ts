import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../email.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {


  public form!: FormGroup;

  constructor(private _FORM: FormBuilder,private router: Router) {
    this.form = this._FORM.group({
      "to_name": ["", Validators.required],
      "email": ["", Validators.required],
      "from_name": ["", Validators.required],
      "message": ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public sendEmail(e) {
    console.log(this.form.value);
    
    e.preventDefault();
    emailjs.sendForm('service_nqbfjf6', 'template_5q3spwo', e.target, 'user_GFDVAhPriAVbcHGK9NXRQ')
      .then((result: EmailJSResponseStatus) => {
        console.log("email sent " + result.text);
        this.router.navigate(['/request'])
      }, (error) => {
        console.log(error.text);
      });
  }


  // sendMessage(): void {
  //   let to: string = this.form.controls["to"].value,
  //     cc: string = this.form.controls["cc"].value,
  //     bcc: string = this.form.controls["cc"].value,
  //     subject: string = this.form.controls["subject"].value,
  //     message: string = this.form.controls["message"].value;
    
  //   this._EMAIL.sendEmail(to, cc, bcc, subject, message);

  // }

}

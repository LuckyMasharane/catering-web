import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../email.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {


  public form!: FormGroup;

  constructor(private _FORM: FormBuilder, private _EMAIL: EmailService) {
    this.form = this._FORM.group({
      "to": ["", Validators.required],
      "cc": ["", Validators.required],
      "bcc": ["", Validators.required],
      "subject": ["", Validators.required],
      "message": ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
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

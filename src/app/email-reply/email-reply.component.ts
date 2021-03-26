import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../email.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {


  public form!: FormGroup;

  constructor(private _FORM: FormBuilder,private router: Router, private gallery:GalleryService) {
    this.form = this._FORM.group({
      to_name: "",
      email: "",
      from_name:"",
      message: ""
    });
  }

  ngOnInit(): void {
  }

  public sendEmail(e) {
    
    e.preventDefault();
    emailjs.sendForm('service_nqbfjf6', 'template_5q3spwo', e.target, 'user_GFDVAhPriAVbcHGK9NXRQ')
      .then((result: EmailJSResponseStatus) => {
        this.gallery.addmessage(this.form.value.message)
        console.log("email sent " + result.text);
        this.router.navigate(['/request'])
      }, (error) => {
        console.log(error.text);
      });
  }

  message(){
    console.log("mes ",this.form.value.message);
    
    this.gallery.addmessage(this.form.value.message)
  }

}

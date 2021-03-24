import { Injectable } from '@angular/core';
// import { EmailComposer } from '@ionic-native/email-composer';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _EMAIL: EmailComposer) { }



  sendEmail(to, cc, bcc, subject, body): void {
    this._EMAIL.requestPermission().then( ()=>{
      console.log("log");
      
    })
    // this._EMAIL.isAvailable().then((available: boolean) => {
    //   if (available) {
    //     // Now we know we can send an email, calls hasClient and hasAccount
    //     // Not specifying an app will return true if at least one email client is configured
    //     // let email = {
    //     //   app: 'mailto',
    //     //   to: to,
    //     //   cc: cc,
    //     //   bcc: bcc,
    //     //   subject: subject,
    //     //   body: body,
    //     //   isHtml: true
    //     // }
    //     // // Send a text message using default options
    //     // this._EMAIL.open(email);
    //     console.log("llll");
        
    //   }
    // });

   

    //   this._EMAIL.isAvailable().then((available: boolean) => {
    //       this._EMAIL.hasPermission().then((isPermitted: boolean) => {
    //           let email: any = {
    //             app: 'mailto',
    //             to: to,
    //             cc: cc,
    //             bcc: bcc,
    //             subject: subject,
    //             body: body
    //           };
    //           this._EMAIL.open(email);
    //         })
    //         .catch((error: any) => {
    //           console.log('No access permission granted');
    //           console.dir(error);
    //         });
    //     })
    //     .catch((error: any) => {
    //       console.log('User does not appear to have device e-mail account');
    //       console.dir(error);
    //     });
   }
  }

import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  afAuth: any;

  // user: User;
  userInfo :any;

  constructor( private db: AngularFirestore) { }

  signInUser(email:any, password:any) {
    let user: any;
    let message: "";

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(message);
      // ...
    }).then(result => {
      user = result;

      if (user) {
        console.log(user.user.email + " Successfully logged in");
      } else {
        console.log(message)
      }
      return user.user.email;
    });
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error))
  }

}

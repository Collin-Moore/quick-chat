import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
  private router: Router) {
    this.afAuth.authState.subscribe( (user: firebase.User) => {
      if (user) {
        console.log("User is signed in as ", user);
      } else {
        console.log("User is not signed in");
      }

     });
   }

   signInWithGoogle(): void {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then( (user: firebase.User) => { 
        this.router.navigate(['/']);
      });
   }

   signOut(): void {
     this.afAuth.auth.signOut();
     this.router.navigate(['/signin']);
   }

}

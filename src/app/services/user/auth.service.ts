import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceProvider {

  constructor() { }

  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  // tslint:disable-next-line:max-line-length
  signupUser(email: string, password: string, username: string, expectedMonth: string, location: string, weeksPregnant: number, bio: string): Promise<any> {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((newUserCredential: firebase.auth.UserCredential) => {
          firebase
              .firestore()
              .doc(`/userProfile/${newUserCredential.user.uid}`)
              .set({ email, username, expectedMonth, weeksPregnant, location, bio });
        })
        .catch(error => {
          console.error(error);
          throw new Error(error);
        });
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  validateCode(code: string): Promise<void> {
    return null;
  }
}



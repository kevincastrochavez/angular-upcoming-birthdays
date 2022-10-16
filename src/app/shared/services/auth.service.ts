import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore, // Injects Firestore service
    public afAuth: AngularFireAuth, // Injects Firebase auth service
    public router: Router,
    private firestore: AngularFirestore
  ) {}

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);

    return user !== null ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        const user = {
          uid: res.user?.uid,
          displayName: res.user?.displayName,
          photoUrl: res.user?.photoUrl,
          email: res.user?.email,
        };

        const userFirebase = {
          uid: res.user?.uid,
          displayName: res.user?.displayName,
        };

        // this.firestore.collection('users').add(userFirebase);
        this.firestore
          .collection('users')
          .doc(user.uid)
          .set(userFirebase, { merge: true });

        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));

        this.router.navigate(['/dashboard']);
      }
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}

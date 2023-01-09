import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user !: User | undefined;
  constructor(private auth: Auth,private httpService: HttpService, private router: Router) {
    authState(auth).subscribe((user) => {
      if (user != null) {
        this.user = user;
      }
    });
  }

  async register(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user : User = userCredential.user;
        // console.log(user);
        this.httpService.createUser(user).subscribe((newUser) =>{
          if(newUser == null){
            console.log('user is already created !!!');
          }else{
            console.log(newUser);
            alert("Sign up success!!!");
            this.router.navigate(['/home']);
          }
        })
        return user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
  }

  async logIn(email: string, password: string) {
    let message;
    await signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        this.user = userCredential.user;
        console.log(this.user)
        message = 'Login success!!!';
        this.router.navigate(['/home']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        message = 'Can not login!!!';
        console.log(errorCode, errorMessage);
      });
    return message;
  }

  async logOut() {
    await signOut(this.auth).then(() => {
      // Sign-out successful.
      this.user = undefined;
      this.router.navigate(['/']);
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }


  // //sign in with gg by modular
  // login() {
  //   return from(new Promise<string>(async (resolve, reject) => {
  //     try {
  //       let credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
  //       // await this.SetUserData(credential.user);
  //       let idToken = await credential.user.getIdToken();
  //       resolve(idToken);
  //     } catch {
  //       reject('Cannot login with google');
  //     }
  //   }));
  // }

  // // Sign out
  // async SignOut() {
  //   return from(new Promise<any>(async (resolve, reject) => {
  //     try {
  //       await signOut(this.auth);
  //       resolve("log out");
  //     }
  //     catch {
  //       reject("logout fail");
  //     }
  //   }))
  // }
}

import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState
} from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user !: User | undefined;
  constructor(private auth: Auth,private httpService: HttpService) {
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
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }
}

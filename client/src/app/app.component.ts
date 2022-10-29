import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(public authService: AuthService, private auth: Auth) {
    // onAuthStateChanged(this.auth, (user) => {
    //   if (user) {
    //     this.user = {
    //       uid: user.uid,
    //       displayName: user.displayName,
    //       email: user.email,
    //       photoURL: user.photoURL,
    //       emailVerified: user.emailVerified,
    //     }
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //     this.user = undefined
    //   }
    // });
    console.log(this.authService.user)
  }
}

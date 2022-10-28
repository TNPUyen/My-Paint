import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {
  Auth,
  onAuthStateChanged,

} from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user !: User
  constructor(private auth: Auth,private authService: AuthService) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        }
        console.log(this.user)
        // ...
      } else {
        // User is signed out
        // ...
        this.user = {
          uid: '',
          displayName: '',
          email: '',
          photoURL: '',
          emailVerified: false,
        }
        console.log(this.user)
      }
    });
   }

  ngOnInit(): void {
  }

  async logout(){
    await this.authService.logOut();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {
  Auth,
  onAuthStateChanged,

} from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user !: any;
  constructor(private auth: Auth,private authService: AuthService, private router: Router) {
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
        this.user = undefined
        console.log(this.user)
      }
    });
   }

  ngOnInit(): void {
  }

  async logout(){
    await this.authService.logOut();
    this.router.navigate(['']);
  }

}

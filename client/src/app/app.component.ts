import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(public authService: AuthService, private auth: Auth,  private router: Router,) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
      //  this.router.navigateByUrl(`/home`);
      } else {
        
      }
    });
  }
}

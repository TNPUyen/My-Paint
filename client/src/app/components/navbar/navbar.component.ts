import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
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
  constructor(public authService: AuthService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

  async logout(){
    await this.authService.logOut();
  }

}

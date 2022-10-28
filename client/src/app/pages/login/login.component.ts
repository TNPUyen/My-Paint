import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isRegist: boolean = false;
  form !: FormGroup

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  navigate() {
    this.isRegist = !this.isRegist
    this.form.reset(this.form);
  }

  async signUp() {
    let tempForm = this.form.value;
    // console.log(tempForm.email, tempForm.password);
    await this.authService.register(tempForm.email, tempForm.password)
    this.form.reset(this.form);
  }

  async signIn() {
    let tempForm = this.form.value;
    // console.log(tempForm.email, tempForm.password);
    let message = await this.authService.logIn(tempForm.email, tempForm.password);
    alert(message);
    this.form.reset(this.form);
    this.router.navigate(['/drawing-board']);
  }

}

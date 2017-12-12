import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  loginError;
  user = {username: 'abcd', password: 'pass'};
  login = function() {
    this.router.navigate(['/dashboard']);
  };
}

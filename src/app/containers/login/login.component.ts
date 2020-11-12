import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      email: [null, Validators.required, Validators.email],
      password : [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login() {
    
  }

}

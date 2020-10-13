import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.signupForm = fb.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]],
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  signUp(){
    // todo implement signup
    console.log('signUp');
    this.router.navigateByUrl('/login');
  }

}

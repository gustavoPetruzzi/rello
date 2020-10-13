import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]],
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

}

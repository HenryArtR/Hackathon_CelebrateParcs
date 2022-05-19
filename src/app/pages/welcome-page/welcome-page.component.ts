import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  

  loginForm: FormGroup;
  

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group(
      {email: ['', Validators.required]}
    );
  }

  getErrorMessage() {
    if (this.loginForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}

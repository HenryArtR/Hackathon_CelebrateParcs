import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  titulo = 'Registro'

  myForm: FormGroup;
  

  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {email: ['', Validators.required]}
    );
  }

  getErrorMessage() {
    if (this.myForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.myForm.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}

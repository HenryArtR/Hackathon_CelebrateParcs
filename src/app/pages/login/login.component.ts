import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() cambioTitulo = new EventEmitter<string>()

  registrado: boolean = false
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      dni: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  cambioLogin(){
    this.registrado = !this.registrado
    if(this.registrado == false){
      this.cambioTitulo.emit('Registro')
    }else{
      this.cambioTitulo.emit('Login')
    }
    
  }

  ngOnInit(): void {
    
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {

  @Output() successfulAuthorization = new EventEmitter();

  fullControl = new FormGroup({
    setEmail: new FormControl('Email', [validatorEmail]),
    setPassword: new FormControl('Password', [validatorPassword])
  });
  
  constructor() { }

  ngOnInit(): void {
    this.fullControl.valueChanges.subscribe((value) => console.log(value));
  }

  Login() {
    if (this.fullControl.controls.setEmail.status === 'VALID' && this.fullControl.controls.setPassword.status === 'VALID') {
      this.successfulAuthorization.emit();
    } else {
      alert('Invalid Email or Password!');
    }
  }
}

function validatorEmail (formControl: any) {
  let email = 'test@test';

  if (formControl.value !== email) {
    return { myValidator: { message: 'error Email'}};
  }else {
    return null;
  }
}

function validatorPassword (formControl: any) {
  let password = 'test';

  if (formControl.value !== password) {
    return { myValidator: { message: 'error password'}};
  }else {
    return null;
  }
}

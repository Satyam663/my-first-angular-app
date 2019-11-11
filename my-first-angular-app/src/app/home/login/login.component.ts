import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //newUser =new user();
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required]),
      password: new FormControl('', [
        Validators.required]),
        role: new FormControl('',[Validators.required])
    });

  }

  onSubmit() {
  console.log(this.loginForm);
  }

  login(){
    ///console.log(this.newUser);
  }

}

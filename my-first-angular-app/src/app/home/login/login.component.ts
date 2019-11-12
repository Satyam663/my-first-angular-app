import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService} from '../../service/auth-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //newUser =new user();
  //loginForm: FormGroup;
  loginForm = new FormGroup({
    userid: new FormControl('admin', [
      Validators.required]),
    password: new FormControl('admin', [
      Validators.required]),
      role: new FormControl('',[Validators.required])
  });
  invalidLogin: boolean;
  constructor(private router: Router, private authService: AuthServiceService) { 
    

  }

  ngOnInit() {
    
  }

  onSubmit() {
  console.log(this.loginForm.value );
  // this.authService.login(this.loginForm.controls.userid.value, this.loginForm.controls.password.value, this.loginForm.controls.role.value).subscribe((data) => {
  //   console.log(data)
  // });
  if (this.authService.authenticate(this.loginForm.controls.userid.value, this.loginForm.controls.password.value , this.loginForm.controls.role.value)
  ) {
    this.router.navigate(['\layout'])
    alert('login successful');
    this.invalidLogin = false;
  } else{
    this.invalidLogin = true;
   alert('invalid credential');
  }
 
}


  


}

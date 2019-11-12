import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService} from '../../service/auth-service.service'
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

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
  constructor(private router: Router, private authService: AuthServiceService, private userservice: UserService) { 
    

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
    if(this.loginForm.controls.role.value === ""){
      alert('please enter the role');
      this.userservice.logOut();
      this.router.navigate(['/login'])

    }else {
          if(this.loginForm.controls.role.value === "Admin"){
            this.router.navigate(['/layout/admin'])
          alert('login successful');
          this.invalidLogin = false;
          } else {
            this.router.navigate(['/layout/customer'])
          alert('login successful');
          this.invalidLogin = false;
          }
    
      }
     } else{
            this.invalidLogin = true;
          alert('invalid credential');
          }

}


  


}

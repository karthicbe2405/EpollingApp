import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form = new FormGroup({
    userName : new FormControl('',Validators.required),
    userPassword : new FormControl('',Validators.required)
  })

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.userLogin(this.form.value).subscribe(data=>{
      alert("Login SuccessFull");
      sessionStorage.setItem("user","active");
      this.router.navigate(['/']);
    },
    err =>{
      alert("Login Failed");
      location.reload();
    });
  }

}

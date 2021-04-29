import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form = new FormGroup({
    adminId : new FormControl('',Validators.required),
    adminPassword : new FormControl('',Validators.required)
  })
  constructor(private adminService : AdminService,private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let loginDetails = JSON.stringify(this.form.value);
    var jsonData = JSON.parse(loginDetails);
    this.adminService.adminLogin(this.form.value).subscribe(data =>{
        sessionStorage.setItem("admin",jsonData['adminId']);
        this.router.navigate(['/admin']);
    },
    err =>{
        console.log("err");
        alert('Login Failed');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form = new FormGroup({
    userName : new FormControl('',Validators.required),
    userPassword : new FormControl('',Validators.required)
  })

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.adminService.addUser(this.form.value).subscribe(data =>{
        alert('User Added Succesfully');
        location.reload();
    },err =>{
      alert('Failed to User');
    });
  }
}

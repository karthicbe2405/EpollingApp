import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.checkSession();
    this.getCandidates();
  }

  checkSession(){
    if(sessionStorage.getItem("admin") == null){
      this.router.navigate(['/adminLogin'])
    }
  }
  getCandidates(){

  }
}

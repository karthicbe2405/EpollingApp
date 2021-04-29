import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../Models/candidate.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  voteCount : number = 0;
  show : boolean  = true; 
  candidates : Candidate[] | undefined;
  
  constructor(private userService : UserService,private router : Router){}

  ngOnInit(): void {
    this.checkSession();
    this.loadCandidates();
  }

  checkSession(){
    if(sessionStorage.getItem("user") == null){
        this.router.navigate(['/userLogin']);
    }
  }
  loadCandidates(){
    this.userService.getCandidates().subscribe(
      data =>{
        this.candidates = data;
      },
      err =>{
        console.log("Error in Fetching Candidates Data");
      }
    );
  }
  vote(selectedCandidate : Candidate){
    this.voteCount++;
    this.userService.vote(selectedCandidate).subscribe(
      data =>{
        alert('Your Vote Registered Successfully');
        if(this.voteCount == 4){
          alert("You Have Reached Your Maximum Vote Limit");
          this.show = false; 
      }
      },
      err =>{
        alert('Something Went Wrong in Our Side');
      }
    );
  }
}

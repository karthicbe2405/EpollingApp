import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/Models/candidate.model';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates : Candidate[] | undefined;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.fetchCandidates();
  }
  
  fetchCandidates(){
    this.adminService.getCandidates().subscribe(data =>{
      this.candidates = data;
    },
    err =>{
      console.log("Error in Fetching Candidates");
    });
  }

}

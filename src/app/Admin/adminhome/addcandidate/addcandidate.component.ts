import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {

  form = new FormGroup({
    candidateName : new FormControl('',Validators.required),
    candidatePartyName : new FormControl('',Validators.required)
  })

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.addCandidate(this.form.value).subscribe(data =>{
        alert('Candidate Added Succesfully');
        location.reload();
    },err =>{
      alert('Failed to Add Candidate');
    });
  }
}

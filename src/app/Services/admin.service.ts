import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Candidate} from '../Models/candidate.model'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http : HttpClient) { }

  connectionUrl = 'http://localhost:3000/admin';
  adminLogin(loginDetails : any):Observable<any>{
    return this.http.post<any>(this.connectionUrl+'/adminLogin',loginDetails);
  }

  getCandidates():Observable<any>{
    return this.http.get<any>(this.connectionUrl+'/candidates');
  }
  addCandidate(candidateDetails : any):Observable<any>{
   return  this.http.post<any>(this.connectionUrl+'/addCandidate',candidateDetails);
  }
  addUser(userDetails : any):Observable<any>{
    return  this.http.post<any>(this.connectionUrl+'/addUser',userDetails);
   }
}

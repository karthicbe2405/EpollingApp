import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) { }

  connectionUrl = 'http://localhost:3000/User';

  userLogin(userDetails : any):Observable<any>{
      return this.http.post<any>(this.connectionUrl+'/userLogin',userDetails)
  }

  getCandidates():Observable<any>{
    return this.http.get<any>(this.connectionUrl+'/candidates');
  }
  vote(candidate : any){
    return this.http.put<any>(this.connectionUrl+'/vote',candidate);
  }
  
}

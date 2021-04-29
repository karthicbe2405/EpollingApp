import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AddUserComponent } from './admin/adminhome/add-user/add-user.component';
import { AddcandidateComponent } from './Admin/adminhome/addcandidate/addcandidate.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { CandidateComponent } from './Admin/adminhome/candidate/candidate.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'' , component:UserDashboardComponent},
  {path:'userLogin' , component:UserLoginComponent},
  {path:'adminLogin' , component:AdminLoginComponent},
  {path : 'admin' , component:AdminhomeComponent,
  children : [
    {path : '' , component : CandidateComponent},
    {path : 'addCandidate' , component : AddcandidateComponent},
    {path : 'addUser' , component : AddUserComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

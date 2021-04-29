import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CandidateComponent } from './Admin/adminhome/candidate/candidate.component';
import { AddcandidateComponent } from './Admin/adminhome/addcandidate/addcandidate.component';
import { AddUserComponent } from './admin/adminhome/add-user/add-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminNavbarComponent,
    AdminLoginComponent,
    CandidateComponent,
    AddcandidateComponent,
    AddUserComponent,
    UserLoginComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

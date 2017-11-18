import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

/** User **/
import { SignupComponent } from './User/signup/signup.component';
import { LoginComponent } from './User/login/login.component';
import { UserDetailsComponent } from './User/details/user-details.component';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './auth.guard';

//Routes
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // UserManage
  {path:'login', component: LoginComponent},
  {path:'register', component: SignupComponent},
  {path:'profil', component: UserDetailsComponent, canActivate: [AuthGuard]}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    ApiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

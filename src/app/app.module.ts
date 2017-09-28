import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './User/signup/signup.component';
import { LoginComponent } from './User/login/login.component';


//Routes
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // UserManage
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

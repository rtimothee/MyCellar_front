import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';

/** User **/
import { SignupComponent } from './Components/User/signup/signup.component';
import { LoginComponent } from './Components/User/login/login.component';
import { UserDetailsComponent } from './Components/User/details/user-details.component';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './auth.guard';

/** Cellar **/
import { CellarComponent } from './Components/Cellar/cellar/cellar.component';
import { WineComponent } from './Components/Cellar/wine/wine.component';


//Routes
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // User Management
  {path:'login', component: LoginComponent},
  {path:'register', component: SignupComponent},
  {path:'profil', component: UserDetailsComponent, canActivate: [AuthGuard]},

  // Cellar Management
  {path:'my-cellar', component: CellarComponent, canActivate: [AuthGuard]},
  {path:'wine/{id}', component: WineComponent, canActivate: [AuthGuard]},
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    UserDetailsComponent,
    CellarComponent,
    WineComponent,
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

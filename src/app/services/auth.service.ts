import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { IUser } from '../pages/login/iLogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  user:Observable<IUser>;

  constructor(private angularAuth: AngularFireAuth, private router:Router) { }


   loginUser(credentials:IUser): Promise<any>{
    try {
      return this.angularAuth.signInWithEmailAndPassword(credentials.user,credentials.pass)
    } catch (error) {
      console.log(error)

    }

  }

  logoutUser(): Promise<void>{
    try {

      return this.angularAuth.signOut().then(()=>{
        this.token=null;
    });
    } catch (error) {

    }

  }
  isAuthenticated() {


    const token = localStorage.getItem('token');
    let data = null;

    if (!token) return;
    //Validar tiempo del token
    const date = new Date().getTime() / 1000;
    try {
      data = jwt.decodeToken(token);
    } catch(e) {
      this.router.navigate(['/login']);
    }
    if (!data) return;
    return date < data.exp;
  }

  getCurrentUser(){
    try {
      return this.angularAuth.currentUser;

    } catch (error) {
      console.log(error)

    }

  }


}



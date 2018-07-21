import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import { Cookie } from 'ng2-cookies/ng2-cookies';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
export class User {
  email: string;
  idrol:number;
  constructor(email: string,idrol:number) {
    this.email = email;
    this.idrol=idrol;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  public ruta:string;
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
    this.ruta="/API/";
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        this.postUsuario(credentials.email,credentials.password).subscribe(data=>{
          console.log(data);
          if(data.acceso){
            // let access = (credentials.password === "pass" && credentials.email === "email");
            Cookie.set('alcohol_email', data.email);
            Cookie.set('alcohol_idrol', data.idrol);
            let access =data;
            this.currentUser = new User(data.email,data.idrol);
            observer.next(access);
            observer.complete();
          }
        });
       
      });
    }
  }// fin de login

  postUsuario(email,password){
    return this.http.post(this.ruta+'alcoholmedida/public/api/login',
    {
      'email':email,
      'password':password,
    }, httpOptions)
    .pipe();
  }// fin de postUsuario

  public getUserInfo() : User {
    return this.currentUser;
  }// fin de getUserInfo
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }// fin de logout

}// fin del export

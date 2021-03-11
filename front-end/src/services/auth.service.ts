import { Injectable } from '@angular/core';
import {_User } from '../models/user.model';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {  Subject } from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:_User;
  public userSelected$: Subject<_User> = new Subject();
  private authUrl= serverUrl + '/auth';
  private loginUrl = this.authUrl +'/login/';
  private signupUrl = this.authUrl +'/signup/';

  constructor(private http: HttpClient) { 
    this.user={username:'',password:'',accessToken:''};
  }

  connect(user){
    const body ={
      username:user.username,
    password:user.password}
    this.http.post<_User>(this.loginUrl,body).subscribe((user) => {
      this.user=user
      this.userSelected$.next(user);
    });
  }

  isConnected(){
    if(this.user==null)
      return false;
    let authHeaders:HttpHeaders= new HttpHeaders();
    authHeaders=authHeaders.append("x-access-token",this.user.accessToken);
    this.http.get<any>(this.authUrl+'/v',{headers:authHeaders}).subscribe(
      (res) => {
      return true;
    },
      (error)=>{
        this.user=null;
        this.userSelected$.next(null);
        return false;
      }
    );
  }
}

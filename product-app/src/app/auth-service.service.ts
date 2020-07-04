import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  login(userName, password) {
    if(userName === "Abhishek" && password === "123456789"){
localStorage.setItem('userName',userName)
      return true;}
else return false;
  }

  logout() {
    localStorage.removeItem('userName')
  }

  getCurrentUserToken() {
    return localStorage.getItem('userName')
  }
}

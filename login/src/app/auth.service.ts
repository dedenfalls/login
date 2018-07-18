import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  getUsPass(username, password){
    if(username=="admin"&& password=="admin"){
      console.log("Welcome again")
    }
    else if(username==""){
      console.log("Please enter your username.")
    }
    else if(password==""){
      console.log("Please enter your password.")
    }
    else{
      console.log("Who are you?")
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  

  constructor(private author : AuthService) {
    this.author=author;
   }

 
 ngOnInit() {

  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username =target.querySelector("#username").value
    const password =target.querySelector("#password").value
    target.querySelector("#username").value = ""
    target.querySelector("#password").value = ""
    this.author.getUsPass(username,password)
    console.log(username,password)
   
  }
  

  
}

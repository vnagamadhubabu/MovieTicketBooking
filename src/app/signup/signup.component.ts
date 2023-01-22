import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  document:any;
  
  constructor(@Inject(DOCUMENT) document:Document,private router:Router,private service:TestService){
    
 
  }

  ngOnInit(): void {
    
  }

  loginUser(): void {

    

    var emailInput = (<HTMLInputElement>document.getElementById('uname')).value.trim();
    var passInput = (<HTMLInputElement>document.getElementById('pwd')).value.trim();
    var emailFormat = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  
    if(!emailInput.match(emailFormat)){
        alert("Please enter a valid email!");
    }else if(passInput ==''){
      alert("Password field can not be empty!");
    }else{
      this.router.navigate(['home']);
    }

        
  }

}

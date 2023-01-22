import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  
  usernamee:any;
  

  constructor(private service:TestService){
    

  }
  ngOnInit(): void {
  
  
}

ok:Boolean=true;
  okk:Boolean=false;
  signup(){
    this.ok=false;
    this.okk=true;
  }
  signout(){
    this.ok=true;
    this.okk=false;
  }
}





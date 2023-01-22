import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  constructor(private service:TestService,private router:Router){

  }
  private movie="ADHIPURUSH";
  private name="AVATAR 2";
  private vera="Veera Simha Reddy";
  private dham="Dhamaka";
  private pag="18 Pages";
  private varisu="Varisu";
  private driv="Driver Jamuna";
  private antm="ANT-MAN AND THE WASP";
  private jhon="Jhon Wick 4";
  private tran="Transformers";
  private topg="Top Gear";
  private patan="PATHAAN";
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  all:Boolean=true;
  telugu:Boolean=false;
  hindi:Boolean=false;
  english:Boolean=false;
  twod:Boolean=false;
  threed:Boolean=false;
  

  telug(){
    this.all=false;
    this.telugu=true;
    this.english=false;
    this.hindi=false;
    this.twod=false;
    this.threed=false;
  }
  alll(){
    this.telugu=false;
    this.english=false;
    this.all=true;
    this.hindi=false;
    this.twod=false;
    this.threed=false;

  }
  eng(){
    this.all=false;
    this.telugu=false;
    this.english=true;
    this.twod=false;
    this.hindi=false;
    this.threed=false;
  }
  thre(){
    this.all=false;
    this.telugu=false;
    this.english=false;
    this.threed=true;
    this.twod=false;
    this.hindi=false;
  }
  hindii(){
    this.all=false;
    this.telugu=false;
    this.english=false;
    this.threed=false;
    this.hindi=true;
    this.twod=false;

  }
  twodd(){
    this.all=false;
    this.telugu=false;
    this.english=false;
    this.threed=false;
    this.hindi=false;
    this.twod=true;

  }
  adhi(){
    this.service.variable1 = this.movie;
    this.router.navigate(['booking']);

  }
  ava(){
    this.service.variable1 = this.name;
    this.router.navigate(['booking']);
  }
  veera(){
    this.service.variable1 = this.vera;
    this.router.navigate(['booking']);
  }
  damka(){
    this.service.variable1 = this.dham;
    this.router.navigate(['booking']);
  }
  page(){
    this.service.variable1 = this.pag;
    this.router.navigate(['booking']);
  }
  vari(){
    this.service.variable1 = this.varisu;
    this.router.navigate(['booking']);
  }
  dri(){
    this.service.variable1 = this.driv;
    this.router.navigate(['booking']);
  }
  ant(){
    this.service.variable1 = this.antm;
    this.router.navigate(['booking']);
  }
  jon(){
    this.service.variable1 = this.jhon;
    this.router.navigate(['booking']);
  }
  tra(){
    this.service.variable1 = this.tran;
    this.router.navigate(['booking']);
  }
  top(){
    this.service.variable1 = this.topg;
    this.router.navigate(['booking']);
  }
  pat(){
    this.service.variable1 = this.patan;
    this.router.navigate(['booking']);
  }

}


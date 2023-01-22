import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { TestService } from '../test.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  sev:any;
  constructor(private router:Router,private service:TestService){

  }
  

  @ViewChild('content',{static:false}) el!:ElementRef

  pa:Boolean=true;
  ticket:Boolean=true;
  down:Boolean=false;
  moviename:any;
  

  mindate = new Date();
  
  ngOnInit(): void {
    
    console.log(this.service.variable1);
    this.moviename=this.service.variable1;
  }

  show:Boolean=false;
  showw:Boolean=false;

  theater1(){
    if(this.show==false){
      this.show=true;
    }else{
      this.show=false;
    }
    
  }
  back(){
    this.router.navigate(['home']);
  }
  theater2(){
    if(this.showw==false){
      this.showw=true;
    }else{
      this.showw=false;
    }
    
  }
  pay(){

    this.ticket=false;
    this.pa=true;
    this.show=false;
    this.showw=false;
    
  }

  makepdf(){
    let pdf = new jsPDF()
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("sample.pdf")
      }
    })
  }
  payy(){
    this.pa=false;
    confirm("confirm Payment");
    this.down=true;
  }
  
}

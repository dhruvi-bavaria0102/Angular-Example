import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public firstName = "Dhruvi";
  public isDisable= true;
  public warningClass = "text-Warning";
  public condition= false;
  public isbold=true;
  public fullname="Dhruvi Bavaria";
  public ngclassexample={
    "text-Warning": this.condition,
    "text-green": this.condition,
    "text-bold": this.isbold
  }
  public clickMessage="";
  constructor() { }

  ngOnInit(){}
  welcomeUser(){
    return "Welcome "+ this.firstName;
  }
 

 
}

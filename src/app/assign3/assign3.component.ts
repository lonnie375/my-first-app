import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign3',
  templateUrl: './assign3.component.html',
  styleUrls: ['./assign3.component.css']
})
export class Assign3Component implements OnInit {

  myPath = 'From Detroit to Houston'; 
  buttonClick = false; 
  clickCounter = 0; 
  countArray = []; 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
     this.buttonClick = !this.buttonClick; 
     this.clickCounter++;
     this.countArray.push(this.clickCounter); 
  }

  getColor(){
    
    return this.countArray.length > 5 ? 'blue' : 'white'; 
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //You can place the selector in brackets like we did here and use it as an CSS element as well 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false; 
  serverCreationStatus = 'No server was created'; 
  serverName = 'TestServer';
  userName = ''; 
  //The method in the constructor doesn't have to be called because it's in the constructor lol
  
  constructor() {

    setTimeout(() => {
      this.allowNewServer = true; 
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
      this.serverCreationStatus = 'Server was created! Name is ' + this.serverName; 
  }

  //This is explicit casting using the HTML Input Element
  //Event is an interface thats created on the DOM 

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; 
  }

  onEmptyString(){
    this.userName = ''; 
  }

}

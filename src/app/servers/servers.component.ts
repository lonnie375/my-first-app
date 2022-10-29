import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', //You can place the selector in brackets like we did here and use it as an CSS element as well 
  template: `<app-server></app-server>
    <p>testing this here</p>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

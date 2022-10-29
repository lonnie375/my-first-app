import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //We are creating a selector named "app-root"
                        //This was injected into the index.html file so that it would be displayed there. 
                        //The information in app.component.html will be displayed in index.html 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], //This is an array because you can add multiple style sheets 
  styles: [`                          
  h3 {
    color: dodgerblue; 
  }`]          
})                                    //You can also add styles as we did here and change the color for your component this way as well 
export class AppComponent {
  
}

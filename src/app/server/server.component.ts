import { Component} from '@angular/core';

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html', 
    styles: [`
    .online {
        color:white; 
    }`]
})

export class ServerComponent{
    serverId: number = 10; 
    serverStatus: string = 'offline'; 
    
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
    }

    getServerStatus() {
        return this.serverStatus; 
    }

    getColor(){
        //We used a ternary operator here. If online green, if not then red 
        return this.serverStatus === 'online' ? 'green' : 'red'; 
    }
}
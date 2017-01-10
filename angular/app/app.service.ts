import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

@Injectable()
export class AppService {

  // Server url
  private url: string = "http://localhost:8080/";

  // Web Socket instance
  private socket: any;
  
  private getSocket(): SocketIOClient.Socket {
    if (!this.socket) {
      this.socket = io(this.url);
    }
    return this.socket;
  }

  // Observable for event 'message'
  public getMessages(): Observable<Object> {
    let observable = new Observable(observer => {
      this.getSocket().on('new message', (data) => {
        observer.next(data);    
      });
      return () => this.socket.disconnect();  
    })     
    return observable;
  }

  // Send message to server
  public sendMessage(message) {
    this.getSocket().emit('add-message', message);    
  }
}
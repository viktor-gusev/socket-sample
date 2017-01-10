import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppService } from './app.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.comp.html'
})

export class AppComp {

  private messages: Array<Object>;
  private subs: Subscription;

  constructor(private service: AppService) {
    this.messages = [];
  }

  public ngOnInit(): void {
    this.subs = this.service.getMessages().subscribe((msg: Object) => {
      this.messages.push(msg);
    });
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private btnClick(): void {
    this.service.sendMessage("New message from client!");
  }
}
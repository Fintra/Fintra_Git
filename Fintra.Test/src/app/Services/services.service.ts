import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ServicesService {

  private message = new BehaviorSubject<string>("");
  Message = this.message.asObservable();
  constructor() { }

  sendActionToPerform (data: string) {
    this.message.next(data);
  }

}

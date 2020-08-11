import { Component } from '@angular/core';
import { Message } from '../../interfaces/message';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {

  public message: Message;
  public messages: Message[];

  chatStatus: boolean;
  private _chatStatus$ = new BehaviorSubject<boolean>(false);
  chatStatus$ = this._chatStatus$.asObservable();

  toggleChat() {
    this.chatStatus = !this.chatStatus;
    this._chatStatus$.next(this.chatStatus);
  }

  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
    ];

}

}

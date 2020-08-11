import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements AfterViewInit {

  @ViewChild('panel', {static: false}) panel: ElementRef;
  @ViewChildren('msg') itemElements: QueryList<any>;

  @Input('messages')
  messages: Message[];

  private scrollContainer: any;
  private items = [];

  constructor() { }

  ngAfterViewInit(){
    this.scrollContainer = this.panel.nativeElement;  
    this.itemElements.changes.subscribe(_ => 
      // console.log('something changed'));
      this.onItemElementsChanged());    
  }

  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
  }

}

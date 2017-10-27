import { Component, OnInit } from '@angular/core';

import { IMessage } from '../imessage'
import{ mockMessages} from '../mock-messages'
import{ MessageService} from '../message.service'

@Component({
  selector: 'message-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  mockMessages: IMessage[] = [];
  myMessage: IMessage;

  constructor(private messageService : MessageService) { }

  ngOnInit():void {
    this.getMessages();
  }
onSelect(myMessage:IMessage):void{
  this.myMessage=myMessage
  console.log(this.myMessage)
}
getMessages(){
  console.log(this);
  this.messageService.getMessages().then((mockMessages) => {
    this.mockMessages= mockMessages;
  })
}
}

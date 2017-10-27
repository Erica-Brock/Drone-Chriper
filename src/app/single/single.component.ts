import { Component, OnInit, Input } from '@angular/core';
import{ ActivatedRoute, ParamMap} from '@angular/router';
import{ Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import{ IMessage } from '../imessage'
import { MessageService} from '../message.service'


@Component({
  selector: 'single-message',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Input() message: IMessage;

  constructor(
    private messageService: MessageService,
    private route:ActivatedRoute,
    private location:Location
  ){}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.messageService.getMyMessage(+params.get('id')))
      .subscribe(message => this.message = message);
  } 
  goBack(): void {
    this.location.back();
  }
  addChirp():void {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent  {
  messageForm:FormGroup;

  constructor(private fb: FormBuilder){
  this.createForm();}

  createForm() { 
    this.messageForm = this.fb.group({
      name:'',
      username:'',
      messge:'',

    });
  }
}

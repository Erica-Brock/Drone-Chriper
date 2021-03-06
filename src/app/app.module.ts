import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import{AppRoutingModule} from './app-routing.module' 

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatToolbarModule,  MatCardModule, MatIconRegistry, MatIconModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirpFormComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [MatIconRegistry,
              MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class matToolbar { }
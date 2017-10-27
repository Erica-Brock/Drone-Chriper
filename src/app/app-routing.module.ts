import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChirpFormComponent }   from './chirp-form/chirp-form.component';
import { ListComponent }      from './list/list.component';
import { SingleComponent }  from './single/single.component';
// import {UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
//   // { path: '', redirectTo: '/', pathMatch: 'full' },
//   { path: 'chirp-form',  component: ChirpFormComponent },
//   { path: 'single/:id', component: SingleComponent },
//   { path: 'list',     component: ListComponent },
// //   { path: 'users', component: UserpageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
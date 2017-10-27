import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import{DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showTitle= parent
  title="Unimatrix 01"

  constructor(iconRegistry: MatIconRegistry, clean:DomSanitizer) {
    iconRegistry.addSvgIcon('menu',clean.bypassSecurityTrustResourceUrl('src/assets/menu.svg'))
  }

  ngOnInit() {
  }

}

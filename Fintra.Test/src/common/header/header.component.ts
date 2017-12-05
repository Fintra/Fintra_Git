import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sideMenuOpened = true;
  openSideMenu = function() {
      this.sideMenuOpened = !this.sideMenuOpened;
  };
}

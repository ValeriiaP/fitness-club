import { Component, OnInit } from '@angular/core';
import { Route } from './router.interface';
import { ROUTERS } from './routers';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public routers: Route[] = ROUTERS;
  isCollapsed: boolean = true;

  collapsed(event: any): void {
  }

  expanded(event: any): void {
  }

  closeNavbarToggler() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit() {
  }
}

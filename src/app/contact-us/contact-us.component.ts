import {Component, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  lat: number = 49.287823;
  lng: number = -123.113112;

  constructor() {
  }

  ngOnInit() {
  }

}

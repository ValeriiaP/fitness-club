import { Component, OnInit } from '@angular/core';
import { IMAGES } from './images';
import { Image } from './image.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: Image[] = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}

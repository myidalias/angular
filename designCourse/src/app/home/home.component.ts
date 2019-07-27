import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  h1Style: boolean = false;

  btnClick() {
    this.h1Style = true;

    console.log('btn clicked');
  }

}

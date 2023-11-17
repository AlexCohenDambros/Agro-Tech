import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Home';
  
  constructor() { }

  ngOnInit() {
  }

}

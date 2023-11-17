import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-profile',
  templateUrl: './component-profile.component.html',
  styleUrls: ['./component-profile.component.css']
})
export class ProfileComponent implements OnInit {

   public title = "Perfil"


  constructor() { }

  ngOnInit() {
  }

}

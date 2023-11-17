import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-market',
  templateUrl: './component-market.component.html',
  styleUrls: ['./component-market.component.css']
})
export class MarketComponent implements OnInit {

  title = "Mercado"

  products = [
    {name: "Sója", qtd: "5", price: "10"},
    {name: "Arroz", qtd: "6", price: "50"},
    {name: "Milho", qtd: "10", price: "15"}
  ];

  constructor() { }

  ngOnInit() {
  }

}

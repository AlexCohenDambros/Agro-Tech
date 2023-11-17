import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-market',
  templateUrl: './component-market.component.html',
  styleUrls: ['./component-market.component.css']
})
export class MarketComponent implements OnInit {

  title = "Mercado"

  products = [
    {id: 12345, name: "Sója", qtd: "5", price: "10"},
    {id: 12346, name: "Arroz", qtd: "6", price: "50"},
    {id: 12347, name: "Milho", qtd: "10", price: "15"}
  ];

  constructor() { }

  ngOnInit() {
  }

}

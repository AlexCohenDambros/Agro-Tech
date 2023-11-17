import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-farm',
  templateUrl: './component-farm.component.html',
  styleUrls: ['./component-farm.component.css']
})
export class FarmComponent implements OnInit {

  title = 'Minha Fazenda'

  farms = [
    {name: "Fazenda Parolin", address: "Rua das Rosas, 123, Bairro Jardim Alegre, Cidade Florescência, Estado Imaginário, CEP: 01234-567."},
    {name: "Fazenda Recanto Verde", address: "Avenida do Bosque, 456, Bairro Vista Serena, Cidade Sombra Verde, Estado Fantasia, CEP: 98765-432."},
    {name: "Rancho Sol Nascente", address: "Estrada do Sol Nascente, 789, Sítio Aurora, Cidade Campo Dourado, Estado dos Sonhos, CEP: 87654-321."}
  ];

  constructor() { }

  ngOnInit() {
  }

}

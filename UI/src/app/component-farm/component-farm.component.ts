import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-farm',
  templateUrl: './component-farm.component.html',
  styleUrls: ['./component-farm.component.css']
})
export class FarmComponent implements OnInit {

  public title = 'Minha Fazenda'

  farms = [
    {id: 145, name: "Fazenda Parolin", street: "Rua das Rosas, 123", district: "Bairro Jardim Alegre", city: "Cidade Florescência, Estado Imaginário", zip_code: "01234-567"},
    {id: 146, name: "Fazenda Recanto Verde", street: "Avenida do Bosque, 456", district: " Bairro Vista Serena", city: "Cidade Sombra Verde, Estado Fantasia", zip_code: "98765-432"},
    {id: 147, name: "Rancho Sol Nascente", street: "Estrada do Sol Nascente, 789", district: "Sítio Aurora", city: "Cidade Campo Dourado, Estado dos Sonhos", zip_code: "87654-321"}
  ];

  constructor() { }

  ngOnInit() {
  }

}

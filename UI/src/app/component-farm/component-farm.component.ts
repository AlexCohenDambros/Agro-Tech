import { Component, OnInit } from '@angular/core';
import { Farm } from '../models/Farm';

@Component({
  selector: 'app-component-farm',
  templateUrl: './component-farm.component.html',
  styleUrls: ['./component-farm.component.css']
})
export class FarmComponent implements OnInit {

  public title: string | undefined;
  public farmSelected: Farm | undefined;

  farms = [
    {id: 145, name: "Parolin", street: "Rua das Rosas, 123", district: "Bairro Jardim Alegre", city: "Cidade Florescência, Estado Imaginário", zip_code: "01234-567", date: "2023-11-21"},
    {id: 146, name: "Recanto Verde", street: "Avenida do Bosque, 456", district: " Bairro Vista Serena", city: "Cidade Sombra Verde, Estado Fantasia", zip_code: "98765-432", date: "2023-11-21"},
    {id: 147, name: "Rancho Sol Nascente", street: "Estrada do Sol Nascente, 789", district: "Sítio Aurora", city: "Cidade Campo Dourado, Estado dos Sonhos", zip_code: "87654-321", date: "2023-11-21"}
  ];

  farmSelect(farm: Farm): void{
    this.farmSelected = farm;
  }

  return(): void{
    this.farmSelected = undefined;
  }
  constructor() { }

  ngOnInit() {
  }

}

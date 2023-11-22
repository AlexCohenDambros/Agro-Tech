import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../models/Item';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-component-market',
  templateUrl: './component-market.component.html',
  styleUrls: ['./component-market.component.css']
})
export class MarketComponent implements OnInit {

  public modalRef?: BsModalRef;
  public title: string | undefined;
  public itemSelected: Item | undefined;
  public textSimple: string | undefined;

  public itemForm: FormGroup = new FormGroup({});


  products = [
    { id: 12345, name: "Sója", qtd: 5, price: 10, date: "2023-11-21"},
    { id: 12346, name: "Arroz", qtd: 6, price: 50, date: "2023-11-21"},
    { id: 12347, name: "Milho", qtd: 10, price: 15, date: "2023-11-21"}
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.createForm();
  }

  ngOnInit() {
    this.applyControl();
  }

  createForm(){
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      qtd: ['', Validators.required]
    });
  }

  itemSubmit(){
    console.log(this.itemForm.value);
  }

  itemSelect(item: Item): void{
    this.itemSelected = item;
    this.itemForm.patchValue(item);
  }

  return(): void{
    this.itemSelected = undefined;
  }

  private applyControl() {
    this.itemForm.addControl("name", []);
    this.itemForm.addControl("qtd", []);
  }
}

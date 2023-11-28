import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/Student';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-component-student',
  templateUrl: './component-student.component.html',
  styleUrls: ['./component-student.component.css']
})
export class StudentComponent implements OnInit {

  public modalRef?: BsModalRef;
  public title: string | undefined;
  public studentSelected: Student | undefined;
  public textSimple: string | undefined;

  public studentForm: FormGroup = new FormGroup({});


  students = [
    { id: 12345, name: "Fabricio", lastname: "Silva", enrollment: "2589632541", date_enrollment: "2023-11-28" },
    { id: 12346, name: "Jonas", lastname: "Pereira", enrollment: "5624897236", date_enrollment: "2023-11-28" },
    { id: 12347, name: "Rodrigo", lastname: "Alves", enrollment: "1542630128", date_enrollment: "2023-11-28" }
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

  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  studentSubmit() {
    console.log(this.studentForm.value);
  }

  studentSelect(student: Student): void {
    this.studentSelected = student;
    this.studentForm.patchValue(student);
  }

  return(): void {
    this.studentSelected = undefined;
  }

  private applyControl() {
    this.studentForm.addControl("name", []);
    this.studentForm.addControl("lastname", []);
  }
}

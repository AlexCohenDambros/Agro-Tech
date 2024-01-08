import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/Student';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StudentService } from '../service/student.service';

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


  public students: Student[] | undefined;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService, private studentService: StudentService) {
    this.createForm();
  }

  ngOnInit() {
    this.applyControl();
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAll().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (erro: any) => {
        console.log(erro);
      }
    );

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

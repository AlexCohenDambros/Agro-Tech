import { Student } from './../models/Student';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  private applyControl() {
    this.studentForm.addControl("nameStudent", []);
    this.studentForm.addControl("lastName", []);
    this.studentForm.addControl("enrollment", []);
    this.studentForm.addControl("date_enrollment", []);
  }

  studentSelect(student: Student): void {
    this.studentSelected = student;
    this.studentForm.patchValue(student);
  }

  loadStudents() {
    this.studentService.getAll().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (error: any) => {
        console.error(error);
      }
    );

  }

  createForm() {
    this.studentForm = this.fb.group({
      idStudent: [''],
      nameStudent: ['', Validators.required],
      lastName: ['', Validators.required],
      enrollment: ['', Validators.required],
      date_enrollment: ['', Validators.required]
    });
  }

  newStudent(){
    this.studentSelected = new Student();
    this.studentForm.patchValue(this.studentSelected);
  }

  studentSubmit() {
    let sStudent: Student = this.studentForm.value;
    (sStudent.idStudent != '') ? this.saveStudent(this.studentForm.value): this.postStudent(this.studentForm.value);
  }

  saveStudent(student: Student) {

    this.studentService.put(student.idStudent, student).subscribe(
      () => {
        this.loadStudents();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  postStudent(student: Student) {

    this.studentService.post(student).subscribe(
      () => {
        this.loadStudents();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteSudent(id: string){
    this.studentService.delete(id).subscribe(
      () => {
        this.loadStudents();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  return(): void {
    this.studentSelected = undefined;
  }
}

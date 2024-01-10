import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/Teacher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../service/teacher.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-component-teacher',
  templateUrl: './component-teacher.component.html',
  styleUrls: ['./component-teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public title: string | undefined;
  public teacherSelected: Teacher | undefined;
  public teacherForm: FormGroup = new FormGroup({});
  public teachers: Teacher[] | undefined;

  constructor(private fb: FormBuilder, private modalService: BsModalService, private teacherService: TeacherService) {
    this.createForm();
  }

  ngOnInit() {
    this.applyControl();
    this.loadTeachers();
  }

  private applyControl() {
    this.teacherForm.addControl("nameTeacher", []);
  }

  teacherSelect(teacher: Teacher): void {
    this.teacherSelected = teacher;
    this.teacherForm.patchValue(teacher);
  }


  loadTeachers() {
    this.teacherService.getAll().subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  createForm() {
    this.teacherForm = this.fb.group({
      idTeacher: [''],
      nameTeacher: ['', Validators.required],
    });

    console.log(this.teacherForm)
  }

  saveTeacher(teacher: Teacher) {
    this.teacherService.put(teacher.idTeacher, teacher).subscribe(
      () => {
        this.loadTeachers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  teacherSubmit() {
    this.saveTeacher(this.teacherForm.value);
  }

  return(): void {
    this.teacherSelected = undefined;
  }

}

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
        console.error(error);
      }
    );
  }

  createForm() {
    this.teacherForm = this.fb.group({
      idTeacher: [''],
      nameTeacher: ['', Validators.required],
    });
  }

  newTeacher(){
    this.teacherSelected = new Teacher();
    this.teacherForm.patchValue(this.teacherSelected);
  }

  teacherSubmit() {
    let sTeacher: Teacher = this.teacherForm.value;
    (sTeacher.idTeacher != '') ? this.saveTeacher(this.teacherForm.value) : this.postTeacher(this.teacherForm.value);
  }

  saveTeacher(teacher: Teacher) {
    this.teacherService.put(teacher.idTeacher, teacher).subscribe(
      () => {
        this.loadTeachers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  postTeacher(teacher: Teacher) {

    this.teacherService.post(teacher).subscribe(
      () => {
        this.loadTeachers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteTeacher(id: string){
    this.teacherService.delete(id).subscribe(
      () => {
        this.loadTeachers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  return(): void {
    this.teacherSelected = undefined;
  }

}

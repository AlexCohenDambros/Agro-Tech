import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Component({
  selector: 'app-component-teacher',
  templateUrl: './component-teacher.component.html',
  styleUrls: ['./component-teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public title: string | undefined;
  public teacherSelected: Teacher | undefined;

  teachers = [
    { id: 145, name: "Roger", lastname: "Silva"},
    { id: 146, name: "Claudio", lastname: "Rodolfo"},
    { id: 147, name: "Fabio", lastname: "Rodrigues"}
  ];

  teacherSelect(teacher: Teacher): void {
    this.teacherSelected = teacher;
  }

  return(): void {
    this.teacherSelected = undefined;
  }
  constructor() { }

  ngOnInit() {
  }

}

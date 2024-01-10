export class Student {
  constructor() {
    this.idStudent = '';
    this.nameStudent = '';
    this.lastName = '';
    this.enrollment = '';
    this.date_enrollment = '';
  }

  idStudent!: string;
  nameStudent: string | undefined;
  lastName: string | undefined;
  enrollment: string | undefined;
  date_enrollment: string | undefined;
}

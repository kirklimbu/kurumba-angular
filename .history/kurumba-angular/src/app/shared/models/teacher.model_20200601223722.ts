import { TeacherSubject } from 'src/app/shared/models/teacher-subject.model';
export class Teacher {
  address: string;
  dob: string;
  name: string;
  phoneNo: string;
  qualification: string;
  subjectList: TeacherSubject[];
  teacherId: number;


  constructor() {
    this.subjectList = [];
  }
}

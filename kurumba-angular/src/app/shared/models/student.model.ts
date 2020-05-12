import { Classes } from './classes.model';
import { Marks } from './marks.model';

export class Student {

  studentId?: number;
  name: string;
  fatherName: string;
  motherName: string;
  rollNo: string;
  dob: string;
  phoneNo: string;
  address: string;
  joinDate: string;
  lastDoublePromoteDate: string;
  lastModDate: string;
  lastPromoteDate: string;
  exStudent: boolean;

  classx: Classes;
  marksList: Marks[] = [];

  constructor() {
    this.marksList = [];

  }
}

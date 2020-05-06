import { Year } from './year.model';
import { Subject } from './subject.model';
import { Terminal } from './terminal.model';
export class Marks {

  marksId?: number;
  gradePoint: string;
  prGrade: string;
  prMarks: string;
  thGrade: string;
  thMarks: string;
  thenClass: number;
  totalGrade: string;
  totalMarks: string;

  subject: Subject;
  terminal: Terminal;
  year: Year;


}

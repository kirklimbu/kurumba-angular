import { Subject } from './subject.model';
import { Section } from './section.model';

export class Classes {

  classId?: number;
  className: string;
  section: Section;
  subjectCollection: Subject[] = [];


  constructor() {
    this.subjectCollection = [];
  }
}

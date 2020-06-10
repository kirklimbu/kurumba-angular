import { Component, OnInit } from '@angular/core';

import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // Props
  teachers: number;
  students: number;
  total
  constructor(
    private sideNavService: SideNavService
  ) { }


  ngOnInit(): void {
    this.fetchTotalCount();
  }


  fetchTotalCount() {

    this.sideNavService.getTotalCount()
      .subscribe(data => {
        const { totalStudent, totalTeacher} = data;
        this.st
        // console.log('total data from server ' + totalStudent);

      })
  }
}

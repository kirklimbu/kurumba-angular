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
  constructor(
    private sideNavService: SideNavService
  ) { }


  ngOnInit(): void {
  }


  fetchTotalCount() {

this.sideNavService.fetchTotalCount()
.subs
  }
}

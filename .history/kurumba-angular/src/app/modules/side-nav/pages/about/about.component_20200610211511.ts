import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  teachers:number;
students:number;
  constructor() { }


  ngOnInit(): void {
  }


  fetchTotalCount(){

  }
}

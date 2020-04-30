import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ngx-spinner',
  templateUrl: './ngx-spinner.component.html',
  styleUrls: ['./ngx-spinner.component.scss']
})
export class NgxSpinnerComponent implements OnInit {


  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}

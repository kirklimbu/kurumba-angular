import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {


  @Input()
  for = '';

  @Input()
  label = '';

  @Input()
  required = false;

  @Output()
  save: EventEmitter<void> = new EventEmitter();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter();
  constructor(
    private spinner: MatProgressSpinnerModule
  ) { }

  ngOnInit(): void {
  }

}

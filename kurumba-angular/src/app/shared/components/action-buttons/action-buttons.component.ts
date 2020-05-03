import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kurumba-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Input()
  enableEdit = true;

  @Input()
  enableDelete = true;


  @Output()
  edit: EventEmitter<void> = new EventEmitter();

  @Output()
  delete: EventEmitter<void> = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
  }
  onEdit() {
    console.log('emiiting edit event');

    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }


}

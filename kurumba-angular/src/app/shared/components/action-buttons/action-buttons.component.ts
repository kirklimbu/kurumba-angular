import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

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

  constructor(
    public dialog: MatDialog

  ) { }


  ngOnInit(): void {
  }


  onEdit() {

    this.edit.emit();
  }

  onDelete() {

    this.delete.emit();
  }

}

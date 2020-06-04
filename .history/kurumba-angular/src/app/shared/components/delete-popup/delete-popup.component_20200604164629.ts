import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  title = 'Confirm Delete';

  message = 'Are you sure you want to remove this record?';
  // dialogRef;


  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeletePopupComponent>,

  ) { }


ngOnInit(): void {
}


close() {
  this.dialogRef.close();

}

dismiss() {
  this.dialogRef.di();

}

}



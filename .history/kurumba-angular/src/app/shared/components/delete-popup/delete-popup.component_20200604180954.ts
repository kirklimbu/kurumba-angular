import { Component, Inject, OnInit } from '@angular/core';
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
    // @Inject(MAT_DIALOG_DATA) public message: string
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) {
      // console.log(this.data)

    }


  ngOnInit(): void {
  }


  close() {
    this.dialogRef.close();

  }

  dismiss() {
    // this.dialogRef.dismiss();

  }

}



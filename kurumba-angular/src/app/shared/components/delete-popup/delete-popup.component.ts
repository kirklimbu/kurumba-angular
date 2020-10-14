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
  selectedId: number;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any, // teacher component le teacher object pathako child component (delete componment lai)

    ) {
      console.log(this.modalData);

    }


  ngOnInit(): void {
  }


  close() {
    this.dialogRef.close('yes');

  }

  dismiss() {
    // this.dialogRef.close( );

  }

}



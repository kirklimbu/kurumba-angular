import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  title = 'Confirm Delete';

  message = 'Are you sure you want to remove this record?';
  dialogRef;


  constructor(
    public dialog: MatDialog
  ) { }


ngOnInit(): void {
}


close() {
  // this.modal.close();

  // tslint:disable-next-line: one-variable-per-declaration
  this.dialogRef = this.dialog.open(DeletePopupComponent)
  // {
  //   // width:  '250px',
  //   data: { }
  // }


}

dismiss() {
  // this.modal.dismiss();

  this.dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
  });
}

}



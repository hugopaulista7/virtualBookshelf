import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalInterface } from './modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  confirmHandler: any = this.data.confirmHandler;
  header: string = this.data.header;
  message: string = this.data.message;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalInterface,
    public dialogRef: MatDialogRef<ModalComponent>,
  ) { }

  ngOnInit(): void {

  }


  closeModal() {
    this.dialogRef.close(false);
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { rules } from './book-create.validators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalInterface } from '../shared/modal/modal.interface';
import { ModalComponent } from '../shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookInterface } from 'src/app/model/book/book.interface';
import { BookController } from 'src/app/controllers/book.controller';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.sass']
})
export class BookCreateComponent implements OnInit {
  form: FormGroup = this.formBuilder.group(rules);
  bookController: BookController = new BookController();
  constructor(
    protected formBuilder: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) public data: ModalInterface,
    // public dialogRef: MatDialogRef<ModalComponent>,
    public snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    // this.dialogRef.close();
  }

  confirm() {
    if (this.form.invalid) {
      this.snack.open('Invalid form!', 'OK', {duration: 2000});
      return ;
    }
    this.createBook();
  }

  createBook() {
    const book: BookInterface = {
      title: this.form.controls.title.value,
      author: this.form.controls.title.value,
      description: this.form.controls.description.value,
      timestamp: this.form.controls.timestamp.value,
      deleted: this.form.controls.deleted.value,
      id: Math.round(Math.random() * 10), /** this will be overwritten in the local storage insertion */
    };

    this.snack.open('Book created successfuly!', 'OK', {duration: 2000});
    this.bookController.createBook(book);
    this.form.reset();
  }

}

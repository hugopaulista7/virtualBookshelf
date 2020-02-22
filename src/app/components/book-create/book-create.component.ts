import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { rules } from './book-create.validators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookInterface } from 'src/app/model/book/book.interface';
import { BookController } from 'src/app/controllers/book.controller';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.sass']
})
export class BookCreateComponent implements OnInit {
  title = 'Create a new book!';
  form: FormGroup = this.formBuilder.group(rules);
  bookController: BookController = new BookController();
  updating = false;
  constructor(
    protected formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BookCreateComponent>,
    public snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.data.title) {
      this.title = this.data.title;
      this.updating = true;
      this.fillForm();
    }
  }

  cancel(data: any = null) {
    this.dialogRef.close(data);
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
      author: this.form.controls.author.value,
      description: this.form.controls.description.value,
      timestamp: this.form.controls.timestamp.value,
      deleted: this.form.controls.deleted.value,
      // tslint:disable-next-line: max-line-length
      id: this.updating ? this.data.book.id : Math.round(Math.random() * 10), /** this will be overwritten in the local storage insertion */
      category: this.updating ? this.data.book.category : 0
    };
    if (this.updating) {
      this.bookController.saveBook(book);
    } else {
      this.bookController.createBook(book);
    }
    this.snack.open(`Book ${this.updating ? 'updated' : 'created'} successfuly!`, 'OK', {duration: 2000});
    this.form.reset();
    this.cancel({reload: true});
  }

  fillForm() {
    const keys = Object.keys(this.form.controls);
    keys.forEach(index => {
      this.form.controls[index].setValue(this.data.book[index]);
    });
  }

}

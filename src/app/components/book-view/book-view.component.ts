import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookController } from 'src/app/controllers/book.controller';
import { BookInterface } from 'src/app/model/book/book.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.sass']
})
export class BookViewComponent implements OnInit {
  bookController = new BookController();
  book: BookInterface;
  categories = [];
  constructor(
    protected acrivatedRoute: ActivatedRoute,
    protected dialog: MatDialog,
    protected snack: MatSnackBar,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.getBook(this.acrivatedRoute.snapshot.paramMap.get('id'));
    this.getCategories();
  }

  getBook(id) {
  this.book = this.bookController.getById(id);
  }

  parseDate(date) {
    const humanDate = new Date(date);
    return `${humanDate.getMonth()}/${humanDate.getDate()}/${humanDate.getFullYear()}`;
  }

  public getCategories() {
    this.categories = this.bookController.getCategories();
  }

  public selectCategory(event) {
    this.book.category = event.target.value;
    this.bookController.saveBook(this.book);
    this.snack.open('Category updated successfuly', 'OK', {duration: 2000});
  }

  public getCategoryName() {
    // tslint:disable-next-line: triple-equals
    return this.categories.find(el => el.id == this.book.category).name;
  }

  public delete() {
    const dialog = this.dialog.open(ModalComponent, {
      data: {
        header: 'Do you really want to delete this book?',
        message: `By deleting this book you'll have to create another book with the same info!`,
        confirmHandler: () => {
          dialog.close(true);
        }
      }
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.book.deleted = true;
        this.bookController.saveBook(this.book);
        this.router.navigate(['/']);
      }
    });
  }
}

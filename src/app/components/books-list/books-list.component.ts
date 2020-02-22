import { Component, OnInit, Input } from '@angular/core';
import { BookController } from 'src/app/controllers/book.controller';
import { BookService } from 'src/app/services/book/book.service';
import { BookInterface } from 'src/app/model/book/book.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  @Input() books = [];
  protected bookController = new BookController();
  constructor(
    protected bookService: BookService
  ) { }

  ngOnInit(): void {
    if (this.books.length <= 0 ) {
      this.books = this.bookController.orderByName();
      this.awaitReload();
    }
  }

  awaitReload() {
    this.bookService.bookSubject.subscribe(() => {
      this.books = this.bookController.orderByName();
    });
  }

}

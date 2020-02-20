import { Component, OnInit, Input } from '@angular/core';
import { BookController } from 'src/app/controllers/book.controller';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  @Input() books = [];
  protected bookController = new BookController();
  constructor() { }

  ngOnInit(): void {
    if (this.books.length <= 0 ) {
      this.books = this.bookController.orderByName();
    }
  }

}

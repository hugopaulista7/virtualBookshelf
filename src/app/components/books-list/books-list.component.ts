import { Component, OnInit } from '@angular/core';
import { BookController } from 'src/app/controllers/book.controller';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  protected bookController = new BookController();
  uncategorizedBooks = [];
  constructor() { }

  ngOnInit(): void {
    this.uncategorizedBooks = this.bookController.orderByName();
  }

}

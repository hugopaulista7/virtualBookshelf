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
  @Input() category = 0;
  protected bookController = new BookController();
  constructor(
    protected bookService: BookService
  ) { }

  ngOnInit(): void {
    if (this.books.length <= 0 ) {
      this.books = this.bookController.orderByName();
    }
    this.awaitReload();
  }

  awaitReload() {
    this.bookService.bookSubject.subscribe((res: any) => {
      this.handleSubscription(res);
    });
  }

  handleSubscription(res: any) {
    if (Array.isArray(res)) {
      this.getWithCategory(res);
    } else {
      this.books = this.bookController.orderByName();
    }
  }

  getWithCategory(res) {
    this.books = res.filter(this.hasCategory);
  }

  public hasCategory = (book) => {
    if (this.category === 0) {
      // tslint:disable-next-line: triple-equals
      return book.category == 0 || book.category == null || book.category == undefined ? true : false;
    }
    // tslint:disable-next-line: triple-equals
    return book.category == this.category;
  }

}

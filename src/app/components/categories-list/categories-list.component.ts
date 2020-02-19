import { Component, OnInit } from '@angular/core';
import { BookController } from 'src/app/controllers/book.controller';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.sass']
})
export class CategoriesListComponent implements OnInit {

  protected bookController = new BookController();
  categories = [];
  constructor() { }

  ngOnInit(): void {
    this.categories = this.bookController.getAllBooksWithCategory();
  }

}

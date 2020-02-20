import { Component, OnInit } from '@angular/core';
import { BookController } from 'src/app/controllers/book.controller';
import { CategoryInterface } from 'src/app/model/category/category.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.sass']
})
export class CategoriesListComponent implements OnInit {

  protected bookController = new BookController();
  categories: Array<CategoryInterface> = [];
  constructor() { }

  ngOnInit(): void {
    this.categories = this.bookController.getAllBooksWithCategory();
  }

}

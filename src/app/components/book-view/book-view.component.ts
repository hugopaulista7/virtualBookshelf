import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookController } from 'src/app/controllers/book.controller';
import { BookInterface } from 'src/app/model/book/book.interface';

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
    protected acrivatedRoute: ActivatedRoute
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
  }

  public getCategoryName() {
    // tslint:disable-next-line: triple-equals
    return this.categories.find(el => el.id == this.book.category).name;
  }

  public delete() {

  }
}

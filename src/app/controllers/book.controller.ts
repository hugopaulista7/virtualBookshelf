import { Book } from '../model/book/book';
import { StorageService } from '../services/storage/storage.service';
import { Category } from '../model/category/category';

import { defaultBooks } from '../../environments/books';
import { BookInterface } from '../model/book/book.interface';
import { Observable, of } from 'rxjs';

export class BookController {
  protected model;
  protected categories;
  protected storage = new StorageService();
  constructor() {
    this.model = new Book(this.storage);
    this.categories = new Category(this.storage).getAll();
    // this.seedBooks();
  }

  public getAllBooksWithoutCategories() {
    return this.model.getAll().filter(this.withoutCategory);
  }

  public getAllAsObservable(): Observable<any> {
    return of(this.model.getAll());
  }

  public getAllBooksWithCategory() {
    const books = this.model.getAll();
    const categoriesWithBooks = [];
    this.categories.forEach(element => {
      categoriesWithBooks.push({
        ...element,
        books: books.filter(el => {
          // tslint:disable-next-line: triple-equals
          return element.id == el.category;
        })
      });
    });

    return categoriesWithBooks;
  }

  private seedBooks() {
    this.model.fillBooks([]);
    this.model.fillBooks(defaultBooks);
  }

  withoutCategory(obj) {
    // tslint:disable-next-line: triple-equals
    return obj.category === undefined || obj.category == 0;
  }

  private order = (a, b) => {
    let upA = a;
    let upB = b;
    if (typeof a !== 'number') {
      upA = a.toUpperCase();
    }
    if (typeof b !== 'number') {
      upB = b.toUpperCase();
    }
    let compare = 0;
    if (upA > upB) {
      compare = 1;
    } else if ( upA < upB) {
      compare = -1;
    }
    return compare;
  }

  public orderAlphabeticalByAuthor = (a, b) => {
    return this.order(a.author, b.author);
  }

  public orderAlphabeticalByTitle = (a, b) => {
    return this.order(a.title, b.title);
  }

  public orderByDate = (a, b) => {
    return this.order(b.timestamp, a.timestamp);
  }

  public orderByName() {
    return this.getAllBooksWithoutCategories().sort(this.orderAlphabeticalByTitle);
  }

  public orderByAuthor() {
    return this.getAllBooksWithoutCategories().sort(this.orderAlphabeticalByAuthor);
  }

  public getById(id) {
    return this.model.getById(id);
  }

  public getByCategory(id) {
    const category = new Category(this.storage).getById(id);
    // tslint:disable-next-line: triple-equals
    category.books = this.model.getAll().filter(el => el.category == id);
    return category;
  }

  public getCategories() {
    return new Category(this.storage).getAll();
  }

  public saveBook(book: BookInterface) {
    this.model.update(book);
  }

  public createBook(book: BookInterface) {
    this.model.create(book);
  }
}

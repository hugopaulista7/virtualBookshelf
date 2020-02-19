import { Book } from '../model/book/book';
import { StorageService } from '../services/storage/storage.service';
import { Category } from '../model/category/category';

import { defaultBooks } from '../../environments/books';
import { BookInterface } from '../model/book/book.interface';

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

  public getAllBooksWithCategory() {
    const books = this.model.getAll();
    const categoriesWithBooks = [];
    this.categories.forEach(element => {
      categoriesWithBooks.push({
        category: {...element},
        books: books.filter(el => element.id === el.category)
      });
    });

    return categoriesWithBooks;
  }

  private seedBooks() {
    defaultBooks.forEach((el: BookInterface) => {
      console.log(el);
      this.model.create(el);
    });
  }


  withoutCategory(obj) {
    return obj.category === undefined;
  }


  private orderAlphabetical = (a, b) => {
    console.log(a, b);
    const upA = a.toUpperCase();
    const upB = b.toUpperCase();
    let compare = 0;
    if (upA > upB) {
      compare = 1;
    } else if ( upA < upB) {
      compare = -1;
    }
    return compare;
  }

  private orderAlphabeticalByTitle = (a, b) => {
    return this.orderAlphabetical(a.title, b.title);
  }

  public orderByName() {
    return this.getAllBooksWithoutCategories().sort(this.orderAlphabeticalByTitle);
  }
}

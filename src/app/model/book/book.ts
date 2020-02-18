import { BookInterface } from './book.interface';
import { StorageService } from 'src/app/services/storage/storage.service';

export class Book
 implements BookInterface {

  constructor(public storage: StorageService) {

  }
  static table = 'books';

  id: number;
  title: string;
  timestamp: number;
  description: string;
  author: string;
  category: number;
  deleted: boolean;


  fill(obj: BookInterface) {
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.author = obj.author;
    this.category = obj.category;
    this.deleted = false;
    this.timestamp = Date.now();
  }

  parseDate() {
    const date = new Date(this.timestamp);
    return date.toString();
  }

  getAll(): Array<BookInterface> {
    return this.storage.get(Book.table);
  }

  save() {
    let books = this.getAll();
    if (!books || books === null) {
      books = [];
    }
    const savingObj: BookInterface = {
      id: this.id,
      title: this.title,
      description: this.description,
      author: this.author,
      category: this.category,
      deleted: this.deleted,
      timestamp: this.timestamp
    };
    books.push(savingObj);
    this.storage.save(Book.table, books);
  }

  getById(id) {
    return this.getAll().find(el => el.id === id);
  }

  update(book: BookInterface) {
    const books = this.getAll();
    const index = books.findIndex(el => el.id === book.id);
    books[index] = book;
    this.storage.save(Book.table, books);
  }
}


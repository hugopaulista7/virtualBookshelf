import { BookInterface } from './book.interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BaseModel } from '../base.model';

export class Book extends BaseModel {

  constructor(protected storage: StorageService) {
    super(storage);
  }

  protected table = 'books';

  create(bookObj: BookInterface) {
    bookObj.deleted = false;
    super.create(bookObj);
  }


  update(bookObj: BookInterface) {
    super.update(bookObj);
  }
}


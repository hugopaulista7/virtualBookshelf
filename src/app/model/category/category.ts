import { CategoryInterface } from './category.interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BaseModel } from '../base.model';

export class Category extends BaseModel {
  protected table = 'categories';

  categories: Array<CategoryInterface> = [
    {
      id: 1,
      name: 'Currently Reading',
      slug: 'reading'
    },
    {
      id: 2,
      name: 'Want to Read',
      slug: 'wantToRead'
    },
    {
      id: 3,
      name: 'Read',
      slug: 'read'
    }
  ];

  constructor(
    protected storage: StorageService
  ) {
    super(storage);
    this.fillCategories();
  }

  fillCategories() {
    this.storage.save(this.table, this.categories);
  }


}

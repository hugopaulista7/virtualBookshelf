import { CategoryInterface } from './category.interface';
import { StorageService } from 'src/app/services/storage/storage.service';

export class Category {
  static table = 'categories';

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
    private storage: StorageService
  ) {
    this.fillCategories();
  }

  fillCategories() {
    this.storage.save(Category.table, this.categories);
  }
}

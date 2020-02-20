import { BookInterface } from '../book/book.interface';

export interface CategoryInterface {
  id: number;
  name: string;
  slug: string;
  books?: Array<BookInterface>;
}

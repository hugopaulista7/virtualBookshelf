import { CommentInterface } from './comment.interface';
import { StorageService } from 'src/app/services/storage/storage.service';

export class Comment implements CommentInterface {
  static table = 'comments';

  id: number;
  parentId?: number;

  timestamp: number;
  body: string;
  author: string;
  deleted = false;


  constructor(private storage: StorageService) {}


  create(obj: CommentInterface) {
    let comments = this.getAll();

    if (comments.length <= 0) {
      comments = [];
    }

    this.id = comments.length + 1;

    // this.

  }
}

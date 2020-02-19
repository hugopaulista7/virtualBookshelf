import { CommentInterface } from './comment.interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BaseModel } from '../base.model';

export class Comment extends BaseModel {
  protected table = 'comments';

  constructor(protected storage: StorageService) {
    super(storage);
  }


  create(obj: CommentInterface) {
   super.create(obj);
  }

  update(commentObj: CommentInterface) {
    super.update(commentObj);
  }
}

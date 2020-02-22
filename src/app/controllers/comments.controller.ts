import { Comment } from '../model/comment/comment';
import { StorageService } from '../services/storage/storage.service';
import { CommentInterface } from '../model/comment/comment.interface';

export class CommentsController {
  protected storage = new StorageService();
  protected model = new Comment(this.storage);
  comments: Array<CommentInterface>;
  constructor() {
  }

  getAll(): Array<CommentInterface> {
    return this.model.getAll();
  }

  getAllByBook(bookId): Array<CommentInterface> {
    // tslint:disable-next-line: triple-equals
    return this.getAll().filter(el => el.bookId == bookId);
  }

  saveComment(comment: CommentInterface) {
    this.model.create(comment);
    return true;
  }

  updateComment(comment: CommentInterface) {
    this.model.update(comment);
  }

  getAnswers(id): Array<CommentInterface> {
    // tslint:disable-next-line: triple-equals
    return this.getAll().filter(el => el.parentId == id);
  }

  deleteCascade(comment: CommentInterface) {
    const answers = this.getAnswers(comment.id);
    answers.forEach(element => {
      element.deleted = true;
      this.updateComment(element);
    });
  }
}

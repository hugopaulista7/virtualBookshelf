import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommentsController } from 'src/app/controllers/comments.controller';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Observable, of } from 'rxjs';
import { CommentsActions } from '../actions/comments.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CommentsEffects {
  commentsController: CommentsController =  new CommentsController();
  constructor(
    protected actions$: Actions,
    protected commentService: CommentService
  ) {}

  @Effect({dispatch: false})
  Delete: Observable<any> = this.actions$.pipe(
    ofType(CommentsActions.DELETE),
    map(({payload}) => payload),
    tap((comment: any) => {
      comment.deleted = true;
      return comment;
    }),
    map(deletedComment => {
      this.commentsController.updateComment(deletedComment);
      this.commentsController.deleteCascade(deletedComment);
      this.commentService.subject$.next(this.commentsController.getAllByBook(deletedComment.bookId));
    })
  );

  @Effect({dispatch: false})
  Edit: Observable<any> = this.actions$.pipe(
    ofType(CommentsActions.EDIT),
    map(({payload}) => payload),
    tap(({...comment}: any) => {
      comment.timestamp = Date.now();
      this.commentsController.updateComment(comment);
      return comment;
    }),
    map(comment => {
      this.commentService.subject$.next(this.commentsController.getAllByBook(comment.bookId));
    })
  );
}

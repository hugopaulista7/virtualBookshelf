import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { ReloadActions } from '../actions/reload.actions';
import { BookController } from 'src/app/controllers/book.controller';

import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book/book.service';

@Injectable()
export class ReloadEffects {
  bookController = new BookController();

  constructor(
    protected actions$: Actions,
    protected bookService: BookService
  ) {}

  @Effect({dispatch: false})
  Reload: Observable<any> = this.actions$.pipe(
    ofType(ReloadActions.RELOAD),
    mergeMap(() => this.bookController.getAllAsObservable()
      .pipe(
        map(books => {
          this.bookService.bookSubject.next(books);
        })
      )
    ),
  );
}

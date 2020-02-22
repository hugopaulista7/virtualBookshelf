import { Injectable } from '@angular/core';
import { BookController } from 'src/app/controllers/book.controller';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { FilterActions, Filter } from '../actions/filter.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book/book.service';

@Injectable()
export class FilterEffects {
  bookController = new BookController();

  constructor(
    protected actions$: Actions,
    protected bookService: BookService
  ) {}

  @Effect({dispatch: false})
  Filter: Observable<any> = this.actions$.pipe(
    ofType(FilterActions.FILTER),
    map((action: Filter) => action.payload),
    mergeMap(payload => this.bookController.getAllAsObservable().pipe(
        map(books => {
          const bookmap = new Map();
          bookmap.set('title', 'orderAlphabeticalByTitle');
          bookmap.set('author', 'orderAlphabeticalByAuthor');
          bookmap.set('timestamp', 'orderByDate');
          return books.sort(this.bookController[bookmap.get(payload.filter)]);
        }),
        map(sortedByTypeBooks => {
          return sortedByTypeBooks.filter(el => {
            if (payload.filter === 'timestamp') {
              return el.title.toUpperCase().includes(payload.search.toUpperCase());
            }
            return el[payload.filter].toUpperCase().includes(payload.search.toUpperCase());
          });
        }),
        tap(sortedByText => this.bookService.bookSubject.next(sortedByText))
      )
    )
  );
}

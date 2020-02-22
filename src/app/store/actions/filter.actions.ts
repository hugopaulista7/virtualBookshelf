import { Action } from '@ngrx/store';
import { State } from '../reducers/filter.reducers';

export enum FilterActions {
  FILTER = '[Filter] Filter'
}

export class Filter implements Action {
  readonly type = FilterActions.FILTER;
  constructor(public payload: State) {
  }
}

export type All = Filter;

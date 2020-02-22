import { Action } from '@ngrx/store';

export enum CommentsActions {
  DELETE = '[Comment] Delete',
  EDIT = '[Comment] Edit'
}

export class Delete implements Action {
  readonly type = CommentsActions.DELETE;
  constructor(public payload: any) {
  }
}

export class Edit implements Action {
  readonly type = CommentsActions.EDIT;
  constructor(public payload: any) {}
}

export type All = Delete | Edit;

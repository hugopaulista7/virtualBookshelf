import { createAction, Action } from '@ngrx/store';

export enum ReloadActions {
  RELOAD = '[Reload] Reload Books'
}

export class Reload implements Action {
  readonly type = ReloadActions.RELOAD;
  constructor(public payload: any) {}
}

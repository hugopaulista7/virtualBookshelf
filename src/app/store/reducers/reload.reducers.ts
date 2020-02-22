import { Action } from '@ngrx/store';
import {ReloadActions} from '../actions/reload.actions';

export interface State {
  reload: boolean;
}

export const initialState: State = {
  reload: false
};

export const reducer = (state: State | undefined, action: Action) => {
  switch (action.type) {
    case ReloadActions.RELOAD : {
      return {
        ...state,
        reload: true
      };
    }
    default: {
      return {
        state
      };
    }
  }
};


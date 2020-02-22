import { FilterActions, All } from '../actions/filter.actions';

export interface State {
  filter: string;
  search?: string;
}

export const initialState: State = {
  filter: 'title',
  search: ''
};

export const reducer = (state: State | undefined, action: All) => {
  switch (action.type) {
    case FilterActions.FILTER: {
      return {
        ...state,
        filter: action.payload.filter,
        search: action.payload.search
      };
    }
    default: {
      return {
        state
      };
    }
  }
};

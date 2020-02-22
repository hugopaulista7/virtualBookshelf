import { CommentsActions, All } from '../actions/comments.actions';
import { CommentInterface } from 'src/app/model/comment/comment.interface';

export interface State {
  comment: {
    deleted: boolean,
    id: number,
    body?: string
  };
}

export const initialState: State = {
  comment: null
};

export const reducer = (state: State | undefined, action: All) => {
  switch (action.type) {
    case CommentsActions.DELETE: {
      return {
        ...state,
        comment: {
          deleted: true,
          id: action.payload.id
        }
      };
    }
    case CommentsActions.EDIT: {
      return {
        ...state,
        comment: {
          deleted: false,
          id: action.payload.id,
          body: action.payload.body
        }
      };
    }
    default: {
      return {
        state
      };
    }
  }
};

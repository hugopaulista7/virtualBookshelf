export interface CommentInterface {
  id?: number;
  parentId?: number;
  timestamp: number;
  body: string;
  author: string;
  deleted: boolean;
}

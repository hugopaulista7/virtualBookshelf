export interface BookInterface {
  id: number;
  title: string;
  timestamp: number;
  description: string;
  author: string;
  category?: any;
  deleted: boolean;
}

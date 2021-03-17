import { Question } from './Question';

export interface Search {
  _id: string;
  query: string;
  pagination: string;
  items: Question[];
  userId?: String;
}
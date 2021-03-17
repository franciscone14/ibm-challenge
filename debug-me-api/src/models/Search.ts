import { model, Schema, Model, Document, Types } from 'mongoose';
import { IQuestion, QuestionSchema } from './Question';

export interface ISearch extends Document {
  query: string;
  pagination: string;
  items: IQuestion[];
  userId?: String;
}

const SearchSchema: Schema = new Schema({
  query: { type: String, required: true },
  pagination: { type: String, required: false},
  userId: { type: String, required: true },
  items: { type: [QuestionSchema], required: false, unique: true}
});

export const Search: Model<ISearch> = model('Search', SearchSchema);
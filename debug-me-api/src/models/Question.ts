import { model, Schema, Model, Document } from 'mongoose';
import { IOwner, OwnerSchema } from "./Owner";

export interface IQuestion extends Document {
    tags: string[];
    owner: IOwner;
    is_answered: boolean;
    view_count: number;
    accepted_answer_id?: number;
    answer_count?: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date?: number;
    question_id: number;
    content_license?: string;
    link: string;
    title: string;
    closed_date?: number;
    closed_reason?: string;
}

export const QuestionSchema: Schema = new Schema({
    tags: [{ type: String }],
    owner: { type: OwnerSchema, required: true, default: {}},
    is_answered: { type: Boolean, required: true},
    view_count: { type: Number, required: true},
    accepted_answer_id: { type: Number, required: false},
    answer_count: { type: Number, required: false},
    score: { type: Number, required: false},
    last_activity_date: { type: Number, required: false},
    creation_date: { type: Number, required: false},
    last_edit_date: { type: Number, required: false},
    question_id: { type: Number, required: false},
    content_license: { type: String, required: false},
    link: { type: String, required: true},
    title: { type: String, required: true},
    closed_date: { type: Number, required: false},
    closed_reason: { type: String, required: false},
});

export const Question: Model<IQuestion> = model('Question', QuestionSchema);
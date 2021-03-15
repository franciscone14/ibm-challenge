import { model, Schema, Model, Document } from 'mongoose';

export interface IOwner extends Document {
    reputation?: number;
    user_id?: number;
    user_type: string;
    accept_rate?: number;
    profile_image?: string;
    display_name: string;
    link?: string;
}

export const OwnerSchema: Schema = new Schema({
    reputation: { type: Number, required: false },
    user_id: { type: Number, required: false },
    user_type: { type: String, required: true },
    accept_rate: { type: Number, required: false },
    profile_image: { type: String, required: false },
    display_name: { type: String, required: true },
    link: { type: String, required: false },
});
  
export const Owner: Model<IOwner> = model('Owners', OwnerSchema);
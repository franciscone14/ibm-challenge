import passport from 'passport';
import { IUser, User } from '../models/User';
import jwt from 'jsonwebtoken';

export default function(id: string) {
  console.log("ID: " + id);
  const token = jwt.sign({ id }, 'MY_SECRET', { expiresIn: 3000 });
  return token;
};
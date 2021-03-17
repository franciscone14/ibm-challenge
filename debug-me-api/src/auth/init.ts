import jwt from 'jsonwebtoken';

export default function(id: string) {
  const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: 3000 });
  return token;
};
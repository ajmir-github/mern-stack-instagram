import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const SECRET_KEY = process.env.SECRET_KEY || "woooo";

export function signToken(_id: string) {
  return jwt.sign(_id, SECRET_KEY);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY);
}

export function hash(str: string) {
  return bcryptjs.hashSync(str, 10);
}

export function compare(str: string, hash: string) {
  return bcryptjs.compareSync(str, hash);
}

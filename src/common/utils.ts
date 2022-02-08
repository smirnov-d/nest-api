import { genSalt, hash } from 'bcrypt';

export async function getHash(str: string) {
  return hash(str, await genSalt(10));
}

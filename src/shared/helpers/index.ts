import { hash, genSalt, compare } from 'bcrypt';

export async function hashString(value: string) {
  const salt = await genSalt();

  return await hash(value, salt);
}

export async function compareHash(value: string, hash: string) {
  return await compare(value, hash);
}

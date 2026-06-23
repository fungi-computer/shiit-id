import { customAlphabet } from "nanoid";

export const ALPHABET_CROCKFORD =
  "0123456789ABCDEFGHJKMNPQRSTVWXYZabcdefghjkmnpqrstvwxyz";

export const SHORT = 8;
export const DEFAULT = 21;
export const LONG = 32;

export function nanoid(length: number = DEFAULT): string {
  return customAlphabet(ALPHABET_CROCKFORD, length)();
}

import { customAlphabet } from "nanoid";

export const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

export const SHORT = 8;
export const DEFAULT = 21;
export const LONG = 32;

export function nanoid(length: number = DEFAULT): string {
  return customAlphabet(ALPHABET, length)();
}

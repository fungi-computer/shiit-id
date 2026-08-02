import { customAlphabet } from "nanoid";

/**
 * Lowercase alphanumeric alphabet. Matches the canonical nanoid default
 * so ids stay URL/path-safe and case-insensitive-keyboard-friendly.
 */
export const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

/**
 * ID length conventions:
 * - DEFAULT (21 chars) is for entity ids: teams, agents, workspaces,
 *   cron jobs, sessions, audit events. Collision probability is
 *   negligible for fungi-scale identity.
 * - SHORT (8 chars) is for non-entity/internal keys where the caller
 *   manages a namespace or retry policy.
 * - LONG (32 chars) is for high-entropy secrets (e.g., one-key keys).
 */

export const SHORT = 8;
export const DEFAULT = 21;
export const LONG = 32;

export function nanoid(length: number = DEFAULT): string {
  return customAlphabet(ALPHABET, length)();
}

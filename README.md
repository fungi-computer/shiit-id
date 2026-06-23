# @shiit/id

Minimal nanoid wrapper using Crockford's base32 alphabet.

## Why

Nanoid's default alphabet includes characters that can be confused when reading codes aloud (e.g., `l` vs `1`, `O` vs `0`). This package uses the [Crockford base32 alphabet](https://www.crockford.com/base32.html) which avoids these ambiguities.

## Installation

```bash
npm install @shiit/id
```

## Usage

```typescript
import { nanoid, ALPHABET_CROCKFORD, SHORT, DEFAULT, LONG } from "@shiit/id";

// Default length (21 characters)
nanoid(); // e.g., "V3X7Pz9QG3B8WFMKTN2HW"

// Short ID (8 characters)
nanoid(SHORT); // e.g., "V3X7Pz9Q"

// Long ID (32 characters)
nanoid(LONG); // e.g., "V3X7Pz9QG3B8WFMKTN2HWV3X7Pz9QG3B8"

// Custom length
nanoid(12); // e.g., "V3X7Pz9QG3B"
```

## API

### `nanoid(length?: number): string`

Generates a unique ID using Crockford's base32 alphabet.

- `length`: Optional length (defaults to 21)
- Returns: A URL-safe unique string

### Constants

- `ALPHABET_CROCKFORD`: The Crockford base32 alphabet used
- `SHORT`: 8 (for short IDs)
- `DEFAULT`: 21 (default length)
- `LONG`: 32 (for long IDs)

## License

MIT

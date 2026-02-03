import type { LinterConfigEntry } from './index.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<LinterConfigEntry>().toBeObject();
});

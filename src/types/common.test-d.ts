import type { StandardConfigOptions } from './common.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<StandardConfigOptions>().toBeObject();
	expectTypeOf<StandardConfigOptions>().toHaveProperty('react');
});

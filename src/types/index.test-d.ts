import type {
	LinterConfigEntry,
	StandardConfig,
	StandardConfigArray,
} from './index.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<LinterConfigEntry>().toBeObject();

	expectTypeOf<StandardConfig>().toBeObject();
	expectTypeOf<StandardConfig>().toHaveProperty('react');

	expectTypeOf<StandardConfigArray>().toBeArray();
});

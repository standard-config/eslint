import type {
	LinterConfigEntry,
	LinterConfigRules,
	StandardConfig,
	StandardConfigArray,
} from './index.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<LinterConfigEntry>().toBeObject();
	expectTypeOf<LinterConfigRules>().toBeObject();

	expectTypeOf<StandardConfig>().toBeObject();
	expectTypeOf<StandardConfig>().toHaveProperty('react');
	expectTypeOf<StandardConfig>().not.toHaveProperty('stylistic');

	expectTypeOf<StandardConfigArray>().toBeArray();
});

import type { StandardConfigOptions } from './common.d.ts';
import type {
	LinterConfigEntry,
	LinterConfigRules,
	StandardConfig,
	StandardConfigArray,
} from './eslint.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<LinterConfigEntry>().toBeObject();
	expectTypeOf<LinterConfigRules>().toBeObject();

	expectTypeOf<StandardConfig>().toBeObject();
	expectTypeOf<StandardConfig>().toHaveProperty('react');
	expectTypeOf<StandardConfig>().not.toEqualTypeOf<StandardConfigOptions>();

	expectTypeOf<StandardConfigArray>().toBeArray();
});

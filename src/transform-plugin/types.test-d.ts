import type { OxlintPluginEntry } from './types.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<OxlintPluginEntry>().toBeObject();
	expectTypeOf<OxlintPluginEntry>().toHaveProperty('name');
	expectTypeOf<OxlintPluginEntry>().toHaveProperty('specifier');
});

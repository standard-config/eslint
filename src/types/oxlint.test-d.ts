import type { OxlintOverrideEntry, OxlintPluginEntry } from './oxlint.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<OxlintOverrideEntry>().toBeObject();
	expectTypeOf<OxlintOverrideEntry>().not.toHaveProperty('files');

	expectTypeOf<OxlintPluginEntry>().toBeObject();
	expectTypeOf<OxlintPluginEntry>().toHaveProperty('name');
	expectTypeOf<OxlintPluginEntry>().toHaveProperty('specifier');
});

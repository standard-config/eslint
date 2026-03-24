import type { StandardConfigOptions } from './common.d.ts';
import type {
	OxlintOverrideEntry,
	OxlintPluginEntry,
	StandardConfig,
} from './oxlint.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<OxlintOverrideEntry>().toBeObject();
	expectTypeOf<OxlintOverrideEntry>().not.toHaveProperty('files');

	expectTypeOf<OxlintPluginEntry>().toBeObject();
	expectTypeOf<OxlintPluginEntry>().toHaveProperty('name');
	expectTypeOf<OxlintPluginEntry>().toHaveProperty('specifier');

	expectTypeOf<StandardConfig>().toBeObject();
	expectTypeOf<StandardConfig>().toHaveProperty('react');
	expectTypeOf<StandardConfig>().not.toEqualTypeOf<StandardConfigOptions>();
});

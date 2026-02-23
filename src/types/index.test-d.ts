import type {
	LinterConfigEntry,
	LinterConfigRules,
	OxlintConfigEntries,
	OxlintConfigEntriesOptions,
	OxlintConfigOverrideEntry,
	OxlintConfigPluginEntry,
	StandardConfig,
	StandardConfigArray,
} from './index.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<LinterConfigEntry>().toBeObject();
	expectTypeOf<LinterConfigRules>().toBeObject();

	expectTypeOf<OxlintConfigEntries>().toBeObject();
	expectTypeOf<OxlintConfigEntries>().toHaveProperty('configBase');
	expectTypeOf<OxlintConfigEntries>().toHaveProperty('configConfigFiles');
	expectTypeOf<OxlintConfigEntries>().toHaveProperty('configReact');

	expectTypeOf<OxlintConfigEntriesOptions>().toBeObject();
	expectTypeOf<OxlintConfigEntriesOptions>().toHaveProperty('react');
	expectTypeOf<OxlintConfigEntriesOptions>().toHaveProperty('stylistic');

	expectTypeOf<OxlintConfigOverrideEntry>().toBeObject();
	expectTypeOf<OxlintConfigOverrideEntry>().not.toHaveProperty('files');

	expectTypeOf<OxlintConfigPluginEntry>().toBeObject();
	expectTypeOf<OxlintConfigPluginEntry>().toHaveProperty('name');
	expectTypeOf<OxlintConfigPluginEntry>().toHaveProperty('specifier');

	expectTypeOf<StandardConfig>().toBeObject();
	expectTypeOf<StandardConfig>().toHaveProperty('react');
	expectTypeOf<StandardConfig>().not.toHaveProperty('stylistic');

	expectTypeOf<StandardConfigArray>().toBeArray();
});

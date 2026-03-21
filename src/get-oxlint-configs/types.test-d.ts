import type {
	OxlintConfigEntries,
	OxlintConfigEntriesOptions,
	OxlintOverrideEntry,
} from './types.d.ts';
import { expectTypeOf, test } from 'vitest';

test('exposes valid types', () => {
	expectTypeOf<OxlintConfigEntries>().toBeObject();
	expectTypeOf<OxlintConfigEntries>().toHaveProperty('oxlintConfigBase');
	expectTypeOf<OxlintConfigEntries>().toHaveProperty(
		'oxlintConfigConfigFiles'
	);
	expectTypeOf<OxlintConfigEntries>().toHaveProperty('oxlintConfigReact');

	expectTypeOf<OxlintConfigEntriesOptions>().toBeObject();
	expectTypeOf<OxlintConfigEntriesOptions>().toHaveProperty('react');
	expectTypeOf<OxlintConfigEntriesOptions>().toHaveProperty('stylistic');

	expectTypeOf<OxlintOverrideEntry>().toBeObject();
	expectTypeOf<OxlintOverrideEntry>().not.toHaveProperty('files');
});

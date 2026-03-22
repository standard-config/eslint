import type { OxlintOverrideEntry } from '../types/oxlint.d.ts';
import { expect, expectTypeOf, test } from 'vitest';
import config from './oxlint.ts';

test('is a valid Oxlint config', () => {
	expectTypeOf(config).toEqualTypeOf<OxlintOverrideEntry>();
	expect(config).toMatchSnapshot();
});

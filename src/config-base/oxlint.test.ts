import type { OxlintConfig } from 'oxlint';
import { defineConfig as oxlintDefineConfig } from 'oxlint';
import { expect, expectTypeOf, test } from 'vitest';
import config from './oxlint.ts';

test('is a valid Oxlint config', () => {
	expectTypeOf(config).toEqualTypeOf<OxlintConfig>();
	expectTypeOf(oxlintDefineConfig(config)).toEqualTypeOf<
		ReturnType<typeof oxlintDefineConfig>
	>();

	expect(config).toMatchSnapshot();
});

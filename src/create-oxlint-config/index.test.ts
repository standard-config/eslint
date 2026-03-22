import type { OxlintConfig } from 'oxlint';
import { defineConfig as oxlintDefineConfig } from 'oxlint';
import { expect, expectTypeOf, test } from 'vitest';
import createOxlintConfig from './index.ts';

test('generates a valid Oxlint config', () => {
	const config = createOxlintConfig();

	expectTypeOf(config).toEqualTypeOf<OxlintConfig>();
	expectTypeOf(oxlintDefineConfig(config)).toEqualTypeOf<
		ReturnType<typeof oxlintDefineConfig>
	>();

	expect(config).toMatchSnapshot();
});

test('supports the `react` option', () => {
	const config = createOxlintConfig({
		react: true,
	});

	expectTypeOf(config).toEqualTypeOf<OxlintConfig>();
	expectTypeOf(oxlintDefineConfig(config)).toEqualTypeOf<
		ReturnType<typeof oxlintDefineConfig>
	>();

	expect(config).toMatchSnapshot();
});

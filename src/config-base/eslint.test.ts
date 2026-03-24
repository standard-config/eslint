import type { LinterConfigEntry } from '../types/eslint.d.ts';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('is a valid ESLint config', async () => {
	const { default: config } = await import('./eslint.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expectTypeOf(eslintDefineConfig(config)).toEqualTypeOf<
		ReturnType<typeof eslintDefineConfig>
	>();

	expect(config).toMatchSnapshot();
});

test('skips parser options when `typescript-eslint` is unavailable', async () => {
	/* @ts-expect-error */
	vi.doMock('typescript-eslint', () => undefined);

	const { default: config } = await import('./eslint.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expectTypeOf(eslintDefineConfig(config)).toEqualTypeOf<
		ReturnType<typeof eslintDefineConfig>
	>();

	expect(config).toHaveProperty('linterOptions');
	expect(config).not.toHaveProperty('languageOptions');
});

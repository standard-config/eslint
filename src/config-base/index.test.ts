import type { LinterConfigEntry } from '../types/index.d.ts';
import { defineConfig } from 'eslint/config';
import { beforeEach, expect, expectTypeOf, test, vi } from 'vitest';

beforeEach(() => {
	vi.resetModules();
});

test('is a valid ESLint config', async () => {
	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(defineConfig(config)).toBeInstanceOf(Array);

	expect(config).toMatchSnapshot();
});

test('skips parser options when `typescript-eslint` is unavailable', async () => {
	vi.doMock('typescript-eslint', () => ({}));

	const { default: config } = await import('./index.ts');

	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(defineConfig(config)).toBeInstanceOf(Array);

	expect(config).toHaveProperty('linterOptions');
	expect(config).not.toHaveProperty('languageOptions');
});

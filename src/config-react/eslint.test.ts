import type { LinterConfigEntry } from '../types/eslint.d.ts';
import { defineConfig as eslintDefineConfig } from 'eslint/config';
import { expect, expectTypeOf, test } from 'vitest';
import config from './eslint.ts';

test('is a valid ESLint config', () => {
	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expectTypeOf(eslintDefineConfig).toBeCallableWith(config);

	expect(config).toMatchSnapshot();
});

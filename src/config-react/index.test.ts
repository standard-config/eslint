import type { LinterConfigEntry } from '../types/index.d.ts';
import { defineConfig } from 'eslint/config';
import { expect, expectTypeOf, test } from 'vitest';
import config from './index.ts';

test('is a valid ESLint config', () => {
	expectTypeOf(config).toEqualTypeOf<LinterConfigEntry>();
	expect(defineConfig(config)).toBeInstanceOf(Array);

	expect(config).toMatchSnapshot();
});

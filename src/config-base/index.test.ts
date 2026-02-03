import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import { expect, expectTypeOf, test } from 'vitest';
import config from './index.ts';

test('is a valid ESLint config', () => {
	expectTypeOf(config).toEqualTypeOf<Linter.Config>();
	expect(defineConfig(config)).toBeInstanceOf(Array);

	expect(config).toMatchSnapshot();
});

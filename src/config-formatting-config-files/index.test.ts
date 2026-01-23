import type { Linter } from 'eslint';
import { expect, expectTypeOf, test } from 'vitest';
import config from './index.ts';

test('is a valid ESLint config', () => {
	expectTypeOf(config).toEqualTypeOf<Linter.Config>();
	expect(config).toMatchSnapshot();
});

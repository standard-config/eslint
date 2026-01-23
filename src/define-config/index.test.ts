import { globalIgnores } from 'eslint/config';
import { expect, test } from 'vitest';
import defineConfig from './index.ts';

test('defines a valid ESLint config', () => {
	expect(defineConfig()).toBeInstanceOf(Array);

	expect(defineConfig(globalIgnores(['**/*.js']))).toBeInstanceOf(Array);

	expect(defineConfig([globalIgnores(['**/*.js'])])).toBeInstanceOf(Array);
});

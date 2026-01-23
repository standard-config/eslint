import { defineConfig } from 'eslint/config';
import { expect, test } from 'vitest';
import config from './index.ts';

test('is a valid ESLint config', () => {
	expect(defineConfig(config)).toBeInstanceOf(Array);

	expect(defineConfig([config])).toBeInstanceOf(Array);

	expect(defineConfig({ extends: [config] })).toBeInstanceOf(Array);
});

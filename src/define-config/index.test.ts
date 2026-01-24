import { globalIgnores } from 'eslint/config';
import { expect, test } from 'vitest';
import defineConfig from './index.ts';

test('defines a valid ESLint config', () => {
	let config = defineConfig();

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(0);

	config = defineConfig(globalIgnores(['**/*.js']));

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(1);

	config = defineConfig([globalIgnores(['**/*.js'])]);

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(1);
});

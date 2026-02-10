import {
	defineConfig as eslintDefineConfig,
	globalIgnores,
} from 'eslint/config';
import { expect, test } from 'vitest';
import defineConfig from './index.ts';

test('defines a valid ESLint config', () => {
	let config = defineConfig();

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(0);
	expect(config).not.toContainEqual(
		expect.objectContaining({
			name: expect.stringContaining('React'),
		})
	);

	config = defineConfig(globalIgnores(['**/*.js']));

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(1);

	config = defineConfig([globalIgnores(['**/*.js'])]);

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(1);

	config = eslintDefineConfig(defineConfig());

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(0);

	config = eslintDefineConfig({ extends: [defineConfig()] });

	expect(config).toBeInstanceOf(Array);
	expect(config.length).toBeGreaterThan(0);
});

test('supports the `react` option', () => {
	let config = defineConfig({
		react: true,
	});

	expect(config).toBeInstanceOf(Array);
	expect(config).toContainEqual(
		expect.objectContaining({
			name: expect.stringContaining('React'),
		})
	);

	config = defineConfig([{ react: true }]);

	expect(config).toBeInstanceOf(Array);
	expect(config).toContainEqual(
		expect.objectContaining({
			name: expect.stringContaining('React'),
		})
	);

	config = defineConfig({
		react: false,
	});

	expect(config).toBeInstanceOf(Array);

	/* @ts-expect-error */
	defineConfig({}, { react: true });

	/* @ts-expect-error */
	defineConfig([{}, { react: true }]);

	/* @ts-expect-error */
	defineConfig([[{ react: true }]]);

	/* @ts-expect-error */
	defineConfig({ react: 1 });
});

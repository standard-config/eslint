import { defineConfig } from 'oxlint';
import { describe, expect, test, vi } from 'vitest';
import getOxlintConfigs from './index.ts';

// Don’t expand dependency paths in snapshots
vi.mock(import('../transform-plugin/index.ts'), async (importActual) => {
	const actual = await importActual();

	return {
		...actual,
		default: (name: string, specifier: string) => ({
			name,
			specifier,
		}),
	};
});

describe('Base', () => {
	test('generates valid Oxlint config entries', () => {
		const result = getOxlintConfigs();

		expect(result).toStrictEqual({
			configBase: expect.any(Object),
			configConfigFiles: expect.any(Object),
			configReact: {},
		});

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configConfigFiles)).toBeDefined();
		expect(result).toMatchSnapshot();
	});

	test('skips stylistic rules', () => {
		const result = getOxlintConfigs({ stylistic: false });

		expect(result).toStrictEqual({
			configBase: expect.any(Object),
			configConfigFiles: {},
			configReact: {},
		});

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(result).toMatchSnapshot();
	});
});

describe('React', () => {
	test('generates valid Oxlint config entries', () => {
		const result = getOxlintConfigs({ react: true });

		expect(result).toStrictEqual({
			configBase: expect.any(Object),
			configConfigFiles: expect.any(Object),
			configReact: expect.any(Object),
		});

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configConfigFiles)).toBeDefined();
		expect(defineConfig(result.configReact)).toBeDefined();
		expect(result).toMatchSnapshot();
	});

	test('skips stylistic rules', () => {
		const result = getOxlintConfigs({ react: true, stylistic: false });

		expect(result).toStrictEqual({
			configBase: expect.any(Object),
			configConfigFiles: {},
			configReact: expect.any(Object),
		});

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configReact)).toBeDefined();
		expect(result).toMatchSnapshot();
	});
});

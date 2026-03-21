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
			oxlintConfigBase: expect.any(Object),
			oxlintConfigConfigFiles: expect.any(Object),
			oxlintConfigReact: {},
		});

		expect(defineConfig(result.oxlintConfigBase)).toBeDefined();
		expect(defineConfig(result.oxlintConfigConfigFiles)).toBeDefined();
		expect(result).toMatchSnapshot();
	});

	test('skips stylistic rules', () => {
		const result = getOxlintConfigs({ stylistic: false });

		expect(result).toStrictEqual({
			oxlintConfigBase: expect.any(Object),
			oxlintConfigConfigFiles: {},
			oxlintConfigReact: {},
		});

		expect(defineConfig(result.oxlintConfigBase)).toBeDefined();
		expect(result).toMatchSnapshot();
	});
});

describe('React', () => {
	test('generates valid Oxlint config entries', () => {
		const result = getOxlintConfigs({ react: true });

		expect(result).toStrictEqual({
			oxlintConfigBase: expect.any(Object),
			oxlintConfigConfigFiles: expect.any(Object),
			oxlintConfigReact: expect.any(Object),
		});

		expect(defineConfig(result.oxlintConfigBase)).toBeDefined();
		expect(defineConfig(result.oxlintConfigConfigFiles)).toBeDefined();
		expect(defineConfig(result.oxlintConfigReact)).toBeDefined();
		expect(result).toMatchSnapshot();
	});

	test('skips stylistic rules', () => {
		const result = getOxlintConfigs({ react: true, stylistic: false });

		expect(result).toStrictEqual({
			oxlintConfigBase: expect.any(Object),
			oxlintConfigConfigFiles: {},
			oxlintConfigReact: expect.any(Object),
		});

		expect(defineConfig(result.oxlintConfigBase)).toBeDefined();
		expect(defineConfig(result.oxlintConfigReact)).toBeDefined();
		expect(result).toMatchSnapshot();
	});
});

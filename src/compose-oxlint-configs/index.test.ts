import { defineConfig } from 'oxlint';
import { describe, expect, test, vi } from 'vitest';
import composeOxlintConfigs from './index.ts';

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
		const result = composeOxlintConfigs();

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
		const result = composeOxlintConfigs({ react: true });

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

describe('Stylistic', () => {
	test('generates valid Oxlint config entries', () => {
		const result = composeOxlintConfigs({ stylistic: true });

		expect(result).toStrictEqual({
			configBase: expect.any(Object),
			configConfigFiles: expect.any(Object),
			configReact: {},
		});

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configConfigFiles)).toBeDefined();
		expect(result).toMatchSnapshot();
	});
});

describe('React + Stylistic', () => {
	test('generates valid Oxlint config entries', () => {
		const result = composeOxlintConfigs({ react: true, stylistic: true });

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
});

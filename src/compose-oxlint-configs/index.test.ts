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

		expect(result).toHaveProperty('configBase', expect.any(Object));
		expect(result).toHaveProperty('configConfigFiles', {});
		expect(result).toHaveProperty('configReact', {});

		expect(defineConfig(result.configBase)).toBeDefined();

		expect(result).toMatchSnapshot();
	});
});

describe('React', () => {
	test('generates valid Oxlint config entries', () => {
		const result = composeOxlintConfigs({ react: true });

		expect(result).toHaveProperty('configBase', expect.any(Object));
		expect(result).toHaveProperty('configConfigFiles', {});
		expect(result).toHaveProperty('configReact', expect.any(Object));

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configReact)).toBeDefined();

		expect(result).toMatchSnapshot();
	});
});

describe('Stylistic', () => {
	test('generates valid Oxlint config entries', () => {
		const result = composeOxlintConfigs({ stylistic: true });

		expect(result).toHaveProperty('configBase', expect.any(Object));
		expect(result).toHaveProperty('configConfigFiles', expect.any(Object));
		expect(result).toHaveProperty('configReact', {});

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configConfigFiles)).toBeDefined();

		expect(result).toMatchSnapshot();
	});
});

describe('React + Stylistic', () => {
	test('generates valid Oxlint config entries', () => {
		const result = composeOxlintConfigs({ react: true, stylistic: true });

		expect(result).toHaveProperty('configBase', expect.any(Object));
		expect(result).toHaveProperty('configConfigFiles', expect.any(Object));
		expect(result).toHaveProperty('configReact', expect.any(Object));

		expect(defineConfig(result.configBase)).toBeDefined();
		expect(defineConfig(result.configConfigFiles)).toBeDefined();
		expect(defineConfig(result.configReact)).toBeDefined();

		expect(result).toMatchSnapshot();
	});
});

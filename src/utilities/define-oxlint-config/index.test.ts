import { defineConfig as standardDefineConfig } from '@standard-config/oxlint';
import { beforeEach, expect, test, vi } from 'vitest';
import oxlintConfigBase from '../../config-base/oxlint.ts';
import oxlintConfigBaseReact from '../../config-react/oxlint.ts';
import defineOxlintConfig from './index.ts';

beforeEach(() => {
	vi.resetModules();
});

vi.mock(import('@standard-config/oxlint'), async (importActual) => {
	const actual = await importActual();

	return {
		...actual,
		defineConfig: vi.fn(),
	};
});

test('calls `defineConfig`', () => {
	defineOxlintConfig({
		rules: {
			'perfectionist/sort-imports': 'off',
		},
	});

	expect(standardDefineConfig).toHaveBeenCalledWith(oxlintConfigBase, {
		rules: {
			'perfectionist/sort-imports': 'off',
		},
	});
});

test('forwards the `react` option', () => {
	defineOxlintConfig({
		react: true,
		rules: {
			'perfectionist/sort-imports': 'off',
		},
	});

	expect(standardDefineConfig).toHaveBeenCalledWith(oxlintConfigBaseReact, {
		react: true,
		rules: {
			'perfectionist/sort-imports': 'off',
		},
	});
});

test('throws when `@standard-config/oxlint` is unavailable', async () => {
	/* @ts-expect-error */
	vi.doMock('@standard-config/oxlint', () => undefined);

	const { default: defineOxlintConfig } = await import('./index.ts');

	expect(() => defineOxlintConfig()).toThrowError('@standard-config/oxlint');
});

import { defineConfig as standardDefineConfig } from '@standard-config/oxlint';
import { expect, test, vi } from 'vitest';
import oxlintConfigBase from '../../config-base/oxlint.ts';
import oxlintConfigBaseReact from '../../config-react/oxlint.ts';
import defineOxlintConfig from './index.ts';

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

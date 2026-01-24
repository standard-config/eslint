import type { ESLint, Linter } from 'eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/**
 * This config is intentionally limited to rules not supported by Oxlint.
 */
const config: Linter.Config = {
	name: 'React',
	plugins: {
		'react': pluginReact,
		'react-hooks': pluginReactHooks as ESLint.Plugin,
	},
	rules: {
		'react/destructuring-assignment': ['error', 'always'],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['arrow-function', 'function-declaration'],
				unnamedComponents: 'arrow-function',
			},
		],
		'react/hook-use-state': 'error',
		'react/jsx-no-constructed-context-values': 'error',
		'react/no-adjacent-inline-elements': 'error',
		'react/no-unstable-nested-components': 'error',

		// Enforce all `react-hooks` rules as errors
		...Object.fromEntries(
			Object.keys(
				pluginReactHooks.configs.flat['recommended-latest'].rules
			).map((rule) => [rule, 'error'])
		),
	},
};

export default config;

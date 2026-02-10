import type { ESLint } from 'eslint';
import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/**
 * This config is intentionally limited to rules not supported by Oxlint
 * and formatting options not supported by Prettier.
 */
const config: LinterConfigEntry = {
	name: 'React',
	plugins: {
		'perfectionist': pluginPerfectionist,
		'react': pluginReact,
		'react-hooks': pluginReactHooks as ESLint.Plugin,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'perfectionist/sort-jsx-props': [
			'error',
			{
				customGroups: [
					{
						groupName: 'as',
						elementNamePattern: '^as$',
					},
					{
						groupName: 'callback',
						elementNamePattern: '^on.+',
					},
					{
						groupName: 'children',
						elementNamePattern: '^children$',
					},
					{
						groupName: 'key',
						elementNamePattern: '^key$',
					},
					{
						groupName: 'ref',
						elementNamePattern: '^ref$',
					},
					{
						groupName: 'unsafe',
						elementNamePattern: '^dangerously.+',
					},
				],
				groups: [
					'key',
					'ref',
					'as',
					'unknown',
					'shorthand-prop',
					'callback',
					'children',
					'unsafe',
				],
				type: 'unsorted',
			},
		],
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

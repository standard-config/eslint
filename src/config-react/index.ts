import type { ESLint } from 'eslint';
import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactNamingConvention from 'eslint-plugin-react-naming-convention';
import pluginReactX from 'eslint-plugin-react-x';

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
		'react-naming-convention': pluginReactNamingConvention,
		'react-x': pluginReactX,
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
		'react-naming-convention/component-name': 'error',
		'react-naming-convention/context-name': 'error',
		'react-naming-convention/ref-name': 'error',
		'react-naming-convention/use-state': 'error',
		'react-x/jsx-dollar': 'error',
		'react-x/jsx-key-before-spread': 'error',
		'react-x/jsx-no-iife': 'error',
		'react-x/no-access-state-in-setstate': 'error',
		'react-x/no-class-component': 'error',
		'react-x/no-context-provider': 'error',
		'react-x/no-default-props': 'error',
		'react-x/no-duplicate-key': 'error',
		'react-x/no-forward-ref': 'error',
		'react-x/no-implicit-key': 'error',
		'react-x/no-leaked-conditional-rendering': 'error',
		'react-x/no-misused-capture-owner-stack': 'error',
		'react-x/no-nested-component-definitions': 'error',
		'react-x/no-nested-lazy-component-declarations': 'error',
		'react-x/no-prop-types': 'error',
		'react-x/no-unnecessary-use-callback': 'error',
		'react-x/no-unnecessary-use-memo': 'error',
		'react-x/no-unstable-context-value': 'error',
		'react-x/no-unstable-default-props': 'error',
		'react-x/no-use-context': 'error',
		'react-x/prefer-destructuring-assignment': 'error',
		'react-x/prefer-use-state-lazy-initialization': 'error',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['arrow-function', 'function-declaration'],
				unnamedComponents: 'arrow-function',
			},
		],
		'react/no-adjacent-inline-elements': 'error',

		// Enforce all `react-hooks` rules as errors
		...Object.fromEntries(
			Object.keys(
				pluginReactHooks.configs.flat['recommended-latest'].rules
			).map((rule) => [rule, 'error'])
		),
	},
};

export default config;

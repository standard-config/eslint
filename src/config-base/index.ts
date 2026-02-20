import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

/**
 * This config is intentionally limited to rules not supported by Oxlint
 * and formatting options not supported by Prettier.
 */
const config: LinterConfigEntry = {
	name: 'Base Config',
	plugins: {
		'@stylistic': pluginStylistic,
		'@typescript-eslint': tseslint.plugin,
		'perfectionist': pluginPerfectionist,
	},
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			warnOnUnsupportedTypeScriptVersion: false,
		},
	},
	linterOptions: {
		reportUnusedDisableDirectives: 'error',
		reportUnusedInlineConfigs: 'error',
	},
	rules: {
		/* oxlint-disable-next-line unicorn/no-useless-spread */
		...{
			'camelcase': ['error', { properties: 'always' }],
			'func-name-matching': [
				'error',
				'never',
				{ considerPropertyDescriptor: true },
			],
		},
		'@stylistic/lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'@stylistic/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				next: '*',
				prev: [
					'block-like',
					'directive',
					'export',
					'function',
					'import',
					'interface',
					'type',
				],
			},
			{
				blankLine: 'always',
				next: [
					'block-like',
					'directive',
					'export',
					'function',
					'import',
					'interface',
					'type',
				],
				prev: '*',
			},
			{
				blankLine: 'always',
				next: '*',
				prev: ['case', 'default'],
			},
			{
				blankLine: 'never',
				next: 'directive',
				prev: 'directive',
			},
			{
				blankLine: 'any',
				next: 'export',
				prev: 'export',
			},
			{
				blankLine: 'never',
				next: ['function', 'function-overload'],
				prev: 'function-overload',
			},
			{
				blankLine: 'never',
				next: 'import',
				prev: 'import',
			},
			{
				blankLine: 'any',
				next: 'interface',
				prev: 'interface',
			},
			{
				blankLine: 'any',
				next: 'type',
				prev: 'type',
			},
		],
		'@stylistic/spaced-comment': [
			'error',
			'always',
			{
				block: {
					balanced: true,
				},
				line: {
					markers: ['/'],
				},
			},
		],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-useless-default-assignment': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'perfectionist/sort-array-includes': ['error', { type: 'natural' }],
		'perfectionist/sort-classes': [
			'error',
			{
				groups: ['property', 'constructor'],
				type: 'natural',
			},
		],
		'perfectionist/sort-exports': ['error', { type: 'natural' }],
		'perfectionist/sort-imports': [
			'error',
			{
				customGroups: [
					{
						groupName: 'mock-side-effect',
						elementNamePattern: '^.*/_*(mocks)_*/.*$',
						selector: 'side-effect',
					},
					{
						groupName: 'mock',
						elementNamePattern: '^.*/_*(mocks)_*/.*$',
						selector: 'import',
					},
				],
				groups: [
					'mock-side-effect',
					'mock',
					['type-builtin', 'type-external'],
					'type-internal',
					['type-parent', 'type-sibling', 'type-index'],
					['value-builtin', 'value-external'],
					'value-internal',
					['value-parent', 'value-sibling', 'value-index'],
					'unknown',
					'style',
					'side-effect',
					'side-effect-style',
				],
				internalPattern: ['^(#|@/).*'],
				newlinesBetween: 0,
				sortSideEffects: true,
				type: 'natural',
			},
		],
		'perfectionist/sort-interfaces': [
			'error',
			{
				groups: ['index-signature', 'unknown', 'method'],
				type: 'natural',
			},
		],
		'perfectionist/sort-intersection-types': ['error', { type: 'natural' }],
		'perfectionist/sort-named-exports': ['error', { type: 'natural' }],
		'perfectionist/sort-named-imports': ['error', { type: 'natural' }],
		'perfectionist/sort-object-types': [
			'error',
			{
				groups: ['index-signature', 'unknown', 'method'],
				type: 'natural',
			},
		],
		'perfectionist/sort-objects': [
			'error',
			{
				type: 'natural',
				useConfigurationIf: {
					objectType: 'destructured',
				},
			},
			{
				type: 'unsorted',
				useConfigurationIf: {
					objectType: 'non-destructured',
				},
			},
		],
		'perfectionist/sort-union-types': [
			'error',
			{
				customGroups: [
					{
						groupName: 'false',
						elementNamePattern: '^false$',
					},
					{
						groupName: 'never',
						elementNamePattern: '^never$',
					},
					{
						groupName: 'react',
						elementNamePattern: '^react.+',
					},
				],
				groups: [
					'react',
					'unknown',
					'tuple',
					'false',
					'nullish',
					'never',
				],
				type: 'natural',
			},
		],
	},
};

export default config;

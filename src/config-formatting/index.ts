import type { Linter } from 'eslint';
import pluginFormatting from 'eslint-plugin-perfectionist';

/**
 * This config is intentionally limited to formatting options
 * not supported by Prettier.
 */
const config: Linter.Config = {
	name: 'Formatting',
	plugins: {
		perfectionist: pluginFormatting,
	},
	rules: {
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
						elementNamePattern: '^.*/_*(mocks)_*/.*$',
						groupName: 'mock-side-effect',
						selector: 'side-effect',
					},
					{
						elementNamePattern: '^.*/_*(mocks)_*/.*$',
						groupName: 'mock',
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
						elementNamePattern: '^false$',
						groupName: 'false',
					},
					{
						elementNamePattern: '^never$',
						groupName: 'never',
					},
					{
						elementNamePattern: '^react.+',
						groupName: 'react',
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

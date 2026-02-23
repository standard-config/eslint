import type { LinterConfigRules } from '../types/index.d.ts';

const rules: LinterConfigRules = {
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
};

export default rules;

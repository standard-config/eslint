import type { LinterConfigRules } from '../types/index.d.ts';

const rules: LinterConfigRules = {
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
};

export default rules;

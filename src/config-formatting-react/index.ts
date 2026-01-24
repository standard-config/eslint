import type { Linter } from 'eslint';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

const config: Linter.Config = {
	name: 'Formatting (React)',
	plugins: {
		perfectionist: pluginPerfectionist,
	},
	rules: {
		'perfectionist/sort-jsx-props': [
			'error',
			{
				customGroups: [
					{
						elementNamePattern: '^as$',
						groupName: 'as',
					},
					{
						elementNamePattern: '^on.+',
						groupName: 'callback',
					},
					{
						elementNamePattern: '^children$',
						groupName: 'children',
					},
					{
						elementNamePattern: '^key$',
						groupName: 'key',
					},
					{
						elementNamePattern: '^ref$',
						groupName: 'ref',
					},
					{
						elementNamePattern: '^dangerously.+',
						groupName: 'unsafe',
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
	},
};

export default config;

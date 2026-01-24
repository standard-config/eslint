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
	},
};

export default config;

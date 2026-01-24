import type { Linter } from 'eslint';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

const config: Linter.Config = {
	name: 'Formatting (Config Files)',
	plugins: {
		perfectionist: pluginPerfectionist,
	},
	rules: {
		'perfectionist/sort-objects': [
			'error',
			{
				customGroups: [
					{
						elementNamePattern: '^extends$',
						groupName: 'extends',
					},
					{
						elementNamePattern: '^files$',
						groupName: 'files',
					},
					{
						elementNamePattern: '^(ignores|ignorePatterns)$',
						groupName: 'ignores',
					},
					{
						elementNamePattern: '^name$',
						groupName: 'name',
					},
					{
						elementNamePattern: '^overrides$',
						groupName: 'overrides',
					},
					{
						elementNamePattern: '^plugins$',
						groupName: 'plugins',
					},
					{
						elementNamePattern: '^rules$',
						groupName: 'rules',
					},
				],
				groups: [
					'name',
					'files',
					'extends',
					'ignores',
					'plugins',
					'unknown',
					'rules',
					'overrides',
				],
				newlinesBetween: 0,
				type: 'natural',
			},
		],
	},
};

export default config;

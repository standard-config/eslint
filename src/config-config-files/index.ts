import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

const config: LinterConfigEntry = {
	name: 'Config Files',
	plugins: {
		perfectionist: pluginPerfectionist,
	},
	rules: {
		'perfectionist/sort-objects': [
			'error',
			{
				customGroups: [
					{
						groupName: 'extends',
						elementNamePattern: '^extends$',
					},
					{
						groupName: 'files',
						elementNamePattern: '^files$',
					},
					{
						groupName: 'ignores',
						elementNamePattern: '^(ignores|ignorePatterns)$',
					},
					{
						groupName: 'name',
						elementNamePattern: '^(name|groupName)$',
					},
					{
						groupName: 'overrides',
						elementNamePattern: '^overrides$',
					},
					{
						groupName: 'parser',
						elementNamePattern: '^parser$',
					},
					{
						groupName: 'plugins',
						elementNamePattern: '^plugins$',
					},
					{
						groupName: 'rules',
						elementNamePattern: '^rules$',
					},
				],
				groups: [
					'name',
					'files',
					'extends',
					'ignores',
					'plugins',
					'parser',
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

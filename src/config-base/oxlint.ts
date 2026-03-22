import type { OxlintConfig } from 'oxlint';
import configConfigFiles from '../config-config-files/oxlint.ts';
import configReact from '../config-react/oxlint.ts';
import transformPlugin from '../transform-plugin/index.ts';
import transformRules from '../transform-rules/index.ts';
import rulesCore from './rules-core.ts';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesStylistic from './rules-stylistic.ts';

/**
 * Primary config entry.
 *
 * Includes React-related rules. Use `createOxlintConfig()` to generate one
 * without them.
 */
const config: OxlintConfig = {
	jsPlugins: [
		transformPlugin('stylistic', '@stylistic/eslint-plugin'),
		transformPlugin('perfectionist', 'eslint-plugin-perfectionist'),
		transformPlugin('react-js', 'eslint-plugin-react'),
		transformPlugin('react-hooks-js', 'eslint-plugin-react-hooks'),
		transformPlugin(
			'react-naming-convention',
			'eslint-plugin-react-naming-convention'
		),
		transformPlugin('react-x', 'eslint-plugin-react-x'),
	],
	settings: {
		react: {
			// Oxlint doesn’t support `detect`
			version: '19.2.4',
		},
	},
	rules: {
		...transformRules(rulesCore, {
			prefix: 'eslint',
		}),
		...transformRules(rulesPerfectionist, {
			omit: [
				// Likely to crash Oxlint
				'perfectionist/sort-classes',
			],
		}),
		...transformRules(rulesStylistic, {
			prefix: 'stylistic',
		}),
	},
	overrides: [
		{
			files: ['**/*.config.{ts,cts,mts}'],
			...configConfigFiles,
		},
		{
			files: ['**/*.tsx'],
			...configReact,
		},
	],
};

export default config;

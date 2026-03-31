import type { OxlintConfig } from 'oxlint';
import oxlintConfigConfigFiles from '../config-config-files/oxlint.ts';
import transformPlugin from '../utilities/transform-plugin/index.ts';
import transformRules from '../utilities/transform-rules/index.ts';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesStylistic from './rules-stylistic.ts';

/**
 * Standard Config’s ESLint config translated for Oxlint.
 *
 * Primary config entry. Does not include React-related rules.
 */
const config: OxlintConfig = {
	jsPlugins: [
		transformPlugin('stylistic', '@stylistic/eslint-plugin'),
		transformPlugin('perfectionist', 'eslint-plugin-perfectionist'),
	],
	settings: {
		react: {
			// Oxlint doesn’t support `detect`
			version: '19.2.4',
		},
	},
	rules: {
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
			...oxlintConfigConfigFiles,
		},
	],
};

export default config;

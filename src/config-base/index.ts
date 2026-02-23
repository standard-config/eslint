import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';
import rulesCore from './rules-core.ts';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesStylistic from './rules-stylistic.ts';

/**
 * Primary config entry.
 *
 * This config is intentionally limited to rules not supported by Oxlint
 * and stylistic rules outside of Prettier’s scope.
 */
const config: LinterConfigEntry = {
	name: 'Base Config',
	plugins: {
		'@stylistic': pluginStylistic,
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
		...rulesCore,
		...rulesPerfectionist,
		...rulesStylistic,
	},
};

export default config;

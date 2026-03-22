import type { LinterConfigEntry } from '../types/eslint.d.ts';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
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

/* oxlint-disable-next-line typescript/consistent-type-imports */
let tseslint: typeof import('typescript-eslint') | undefined;

try {
	tseslint = await import('typescript-eslint');
} catch {}

if (tseslint && Object.hasOwn(tseslint, 'parser')) {
	config.languageOptions = {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			warnOnUnsupportedTypeScriptVersion: false,
		},
	};
}

export default config;

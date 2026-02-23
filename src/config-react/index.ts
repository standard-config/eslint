import type { ESLint } from 'eslint';
import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactNamingConvention from 'eslint-plugin-react-naming-convention';
import pluginReactX from 'eslint-plugin-react-x';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesReactHooks from './rules-react-hooks.ts';
import rulesReactNamingConvention from './rules-react-naming-convention.ts';
import rulesReactX from './rules-react-x.ts';
import rulesReact from './rules-react.ts';

/**
 * Optional config entry containing rules that target `*.tsx` files. Intended
 * for explicit overrides.
 *
 * This config is intentionally limited to rules not supported by Oxlint
 * and stylistic rules outside of Prettier’s scope.
 */
const config: LinterConfigEntry = {
	name: 'React',
	plugins: {
		'perfectionist': pluginPerfectionist,
		'react': pluginReact,
		'react-hooks': pluginReactHooks as ESLint.Plugin,
		'react-naming-convention': pluginReactNamingConvention,
		'react-x': pluginReactX,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		...rulesPerfectionist,
		...rulesReact,
		...rulesReactHooks,
		...rulesReactNamingConvention,
		...rulesReactX,
	},
};

export default config;

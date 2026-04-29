import type { LinterConfigEntry } from '../types/eslint.d.ts';
import pluginReact from '@eslint-react/eslint-plugin';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import rulesPerfectionist from './rules-perfectionist.ts';
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
		'react-x': pluginReact,
	},
	settings: {
		'react-x': {
			version: 'detect',
		},
	},
	rules: {
		...rulesPerfectionist,
		...rulesReact,
	},
};

export default config;

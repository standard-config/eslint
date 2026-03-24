import type { LinterConfigEntry } from '../types/eslint.d.ts';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react-x';
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
		react: {
			version: 'detect',
		},
	},
	rules: {
		...rulesPerfectionist,
		...rulesReact,
		...rulesReact,
	},
};

export default config;

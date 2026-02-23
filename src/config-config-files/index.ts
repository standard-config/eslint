import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import rulesPerfectionist from './rules-perfectionist.ts';

/**
 * Optional config entry containing rules that target config files. Intended for
 * explicit overrides.
 *
 * This config is intentionally limited to rules not supported by Oxlint
 * and stylistic rules outside of Prettier’s scope.
 */
const config: LinterConfigEntry = {
	name: 'Config Files',
	plugins: {
		perfectionist: pluginPerfectionist,
	},
	rules: {
		...rulesPerfectionist,
	},
};

export default config;

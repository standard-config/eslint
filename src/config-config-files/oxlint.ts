import type { OxlintOverrideEntry } from '../types/oxlint.d.ts';
import rulesPerfectionist from './rules-perfectionist.ts';

/**
 * Optional config entry containing rules that target config files. Intended for
 * explicit overrides.
 */
const config: OxlintOverrideEntry = {
	rules: {
		...rulesPerfectionist,
	},
};

export default config;

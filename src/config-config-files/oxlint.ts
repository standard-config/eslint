import type { OxlintOverrideEntry } from '../types/oxlint.d.ts';
import rulesPerfectionist from './rules-perfectionist.ts';

/**
 * Standard Config’s ESLint config translated for Oxlint.
 *
 * Optional config entry containing rules that target config files. Intended for
 * explicit overrides.
 */
const config: OxlintOverrideEntry = {
	rules: {
		...rulesPerfectionist,
	},
};

export default config;

import type { OxlintOverrideEntry } from '../types/oxlint.d.ts';
import rulesReact from './rules-react.ts';

/**
 * Standard Config’s ESLint config translated for Oxlint.
 *
 * Optional config entry containing rules that target test files. Intended for
 * explicit overrides.
 */
const config: OxlintOverrideEntry = {
	rules: {
		...rulesReact,
	},
};

export default config;

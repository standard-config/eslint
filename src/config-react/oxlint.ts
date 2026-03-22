import type { OxlintOverrideEntry } from '../types/oxlint.d.ts';
import transformRules from '../transform-rules/index.ts';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesHooks from './rules-react-hooks.ts';
import rulesReactNamingConvention from './rules-react-naming-convention.ts';
import rulesReactX from './rules-react-x.ts';
import rulesReact from './rules-react.ts';

/**
 * Optional config entry containing rules that target `*.tsx` files. Intended
 * for explicit overrides.
 */
const config: OxlintOverrideEntry = {
	rules: {
		...rulesPerfectionist,
		...transformRules(rulesReact, {
			prefix: 'react-js',
		}),
		...transformRules(rulesHooks, {
			prefix: 'react-hooks-js',
		}),
		...rulesReactNamingConvention,
		...transformRules(rulesReactX, {
			omit: [
				// Oxlint doesn’t support type-aware rules
				'react-x/no-implicit-key',
				'react-x/no-leaked-conditional-rendering',
			],
		}),
	},
};

export default config;

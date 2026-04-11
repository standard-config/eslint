import type { OxlintConfig } from 'oxlint';
import clone from '../clone/index.ts';
import oxlintConfigBase from '../config-base/oxlint.ts';
import transformRules from '../utilities/transform-rules/index.ts';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesReact from './rules-react.ts';

/**
 * Standard Config’s ESLint config translated for Oxlint.
 *
 * Primary config entry. Includes React-related rules.
 */
const config: OxlintConfig = {
	...clone(oxlintConfigBase),

	settings: {
		react: {
			// Oxlint doesn’t support `detect`
			version: '19.2.5',
		},
	},
};

config.overrides!.unshift({
	files: [
		/* prettier-ignore */
		'**/*.tsx',
	],
	rules: {
		...rulesPerfectionist,
		...transformRules(rulesReact, {
			omit: [
				// Oxlint doesn’t support type-aware rules
				'react-x/no-implicit-key',
				'react-x/no-leaked-conditional-rendering',
			],
		}),
	},
});

export default config;

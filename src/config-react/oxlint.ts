import type { OxlintConfig } from 'oxlint';
import clone from '../clone/index.ts';
import configBase from '../config-base/oxlint.ts';
import transformPlugin from '../transform-plugin/index.ts';
import transformRules from '../transform-rules/index.ts';
import rulesPerfectionist from './rules-perfectionist.ts';
import rulesReactX from './rules-react-x.ts';
import rulesReact from './rules-react.ts';

/**
 * Standard Config’s ESLint config translated for Oxlint.
 *
 * Primary config entry. Includes React-related rules.
 */
const config: OxlintConfig = {
	...clone(configBase),

	settings: {
		react: {
			// Oxlint doesn’t support `detect`
			version: '19.2.4',
		},
	},
};

config.jsPlugins!.push(
	transformPlugin('react-js', 'eslint-plugin-react'),
	transformPlugin('react-x', 'eslint-plugin-react-x')
);

config.overrides!.push({
	files: ['**/*.tsx'],
	rules: {
		...rulesPerfectionist,
		...transformRules(rulesReact, {
			prefix: 'react-js',
		}),
		...transformRules(rulesReactX, {
			omit: [
				// Oxlint doesn’t support type-aware rules
				'react-x/no-implicit-key',
				'react-x/no-leaked-conditional-rendering',
			],
		}),
	},
});

export default config;

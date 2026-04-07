import type { LinterConfigEntry } from '../types/eslint.d.ts';
import pluginReact from 'eslint-plugin-react-x';
import rulesReact from './rules-react.ts';

/**
 * Optional config entry containing rules that target test files. Intended for
 * explicit overrides.
 *
 * This config is intentionally limited to rules not supported by Oxlint
 * and stylistic rules outside of Prettier’s scope.
 */
const config: LinterConfigEntry = {
	name: 'Test Files',
	plugins: {
		'react-x': pluginReact,
	},
	rules: {
		...rulesReact,
	},
};

export default config;

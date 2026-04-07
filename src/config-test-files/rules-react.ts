import type { LinterConfigRules } from '../types/eslint.ts';

const rules: LinterConfigRules = {
	'react-x/component-hook-factories': 'off',
	'react-x/no-nested-component-definitions': 'off',
	'react-x/no-nested-lazy-component-declarations': 'off',
	'react-x/no-unnecessary-use-callback': 'off',
	'react-x/no-unnecessary-use-memo': 'off',
	'react-x/no-unstable-context-value': 'off',
};

export default rules;

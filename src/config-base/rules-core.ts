import type { LinterConfigRules } from '../types/eslint.d.ts';

const rules: LinterConfigRules = {
	'func-name-matching': [
		'error',
		'never',
		{ considerPropertyDescriptor: true },
	],
};

export default rules;

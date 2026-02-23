import type { LinterConfigRules } from '../types/index.d.ts';

const rules: LinterConfigRules = {
	'camelcase': ['error', { properties: 'always' }],
	'func-name-matching': [
		'error',
		'never',
		{ considerPropertyDescriptor: true },
	],
};

export default rules;

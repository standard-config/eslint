import type { LinterConfigRules } from '../types/index.d.ts';

const rules: LinterConfigRules = {
	'react/function-component-definition': [
		'error',
		{
			namedComponents: ['arrow-function', 'function-declaration'],
			unnamedComponents: 'arrow-function',
		},
	],
	'react/no-adjacent-inline-elements': 'error',
};

export default rules;

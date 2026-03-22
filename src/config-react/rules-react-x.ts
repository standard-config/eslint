import type { LinterConfigRules } from '../types/eslint.d.ts';

const rules: LinterConfigRules = {
	'react-x/component-hook-factories': 'error',
	'react-x/error-boundaries': 'error',
	'react-x/immutability': 'error',
	'react-x/jsx-dollar': 'error',
	'react-x/jsx-key-before-spread': 'error',
	'react-x/no-access-state-in-setstate': 'error',
	'react-x/no-class-component': 'error',
	'react-x/no-context-provider': 'error',
	'react-x/no-duplicate-key': 'error',
	'react-x/no-forward-ref': 'error',
	'react-x/no-implicit-key': 'error',
	'react-x/no-leaked-conditional-rendering': 'error',
	'react-x/no-misused-capture-owner-stack': 'error',
	'react-x/no-nested-component-definitions': 'error',
	'react-x/no-nested-lazy-component-declarations': 'error',
	'react-x/no-unnecessary-use-callback': 'error',
	'react-x/no-unnecessary-use-memo': 'error',
	'react-x/no-unstable-context-value': 'error',
	'react-x/no-unstable-default-props': 'error',
	'react-x/no-use-context': 'error',
	'react-x/prefer-destructuring-assignment': 'error',
	'react-x/purity': 'error',
	'react-x/refs': 'error',
	'react-x/set-state-in-effect': 'error',
	'react-x/set-state-in-render': 'error',
	'react-x/unsupported-syntax': 'error',
	'react-x/use-memo': 'error',
	'react-x/use-state': 'error',
};

export default rules;

import type { LinterConfigRules } from '../types/index.d.ts';

const rules: LinterConfigRules = {
	'react-x/jsx-dollar': 'error',
	'react-x/jsx-key-before-spread': 'error',
	'react-x/jsx-no-iife': 'error',
	'react-x/no-access-state-in-setstate': 'error',
	'react-x/no-class-component': 'error',
	'react-x/no-context-provider': 'error',
	'react-x/no-default-props': 'error',
	'react-x/no-duplicate-key': 'error',
	'react-x/no-forward-ref': 'error',
	'react-x/no-implicit-key': 'error',
	'react-x/no-leaked-conditional-rendering': 'error',
	'react-x/no-misused-capture-owner-stack': 'error',
	'react-x/no-nested-component-definitions': 'error',
	'react-x/no-nested-lazy-component-declarations': 'error',
	'react-x/no-prop-types': 'error',
	'react-x/no-unnecessary-use-callback': 'error',
	'react-x/no-unnecessary-use-memo': 'error',
	'react-x/no-unstable-context-value': 'error',
	'react-x/no-unstable-default-props': 'error',
	'react-x/no-use-context': 'error',
	'react-x/prefer-destructuring-assignment': 'error',
	'react-x/prefer-use-state-lazy-initialization': 'error',
};

export default rules;

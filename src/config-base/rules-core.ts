import type { LinterConfigRules } from '../types/eslint.d.ts';

const rules: LinterConfigRules = {
	camelcase: ['error', { properties: 'always' }],
};

export default rules;

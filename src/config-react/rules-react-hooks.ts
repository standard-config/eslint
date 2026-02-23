import type { LinterConfigRules } from '../types/index.d.ts';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import transformRules from '../transform-rules/index.ts';

const rules: LinterConfigRules = transformRules(
	pluginReactHooks.configs.flat['recommended-latest'].rules,
	{
		omit: [
			/* prettier-ignore */
			'react-hooks/exhaustive-deps',
			'react-hooks/rules-of-hooks',
		],
		severity: 'error',
	}
);

export default rules;

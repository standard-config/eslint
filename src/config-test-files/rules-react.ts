import type { LinterConfigRules } from '../types/eslint.ts';

const rules: LinterConfigRules = {
	'react-x/dom-no-flush-sync': 'off',
	'react-x/dom-no-unsafe-iframe-sandbox': 'off',
	'react-x/jsx-no-useless-fragment': 'off',
	'react-x/naming-convention-context-name': 'off',
	'react-x/naming-convention-id-name': 'off',
	'react-x/naming-convention-ref-name': 'off',
	'react-x/no-nested-component-definitions': 'off',
	'react-x/no-nested-lazy-component-declarations': 'off',
	'react-x/no-unnecessary-use-prefix': 'off',
	'react-x/no-unstable-context-value': 'off',
	'react-x/static-components': 'off',
	'react-x/web-api-no-leaked-event-listener': 'off',
	'react-x/web-api-no-leaked-interval': 'off',
	'react-x/web-api-no-leaked-resize-observer': 'off',
	'react-x/web-api-no-leaked-timeout': 'off',
};

export default rules;

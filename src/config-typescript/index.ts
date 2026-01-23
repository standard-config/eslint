import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

/**
 * This config is intentionally limited to rules not supported by Oxlint.
 */
const config: Linter.Config = {
	name: 'TypeScript',
	plugins: {
		'@typescript-eslint': tseslint.plugin,
	},
	rules: {
		/* oxlint-disable-next-line unicorn/no-useless-spread */
		...{
			'camelcase': ['error', { properties: 'always' }],
			'dot-notation': 'error',
			'func-name-matching': [
				'error',
				'never',
				{ considerPropertyDescriptor: true },
			],
		},
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter',
			},
		],
		'@typescript-eslint/consistent-type-exports': [
			'error',
			{ fixMixedExportsWithInlineTypeSpecifier: true },
		],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-useless-default-assignment': 'error',
		'@typescript-eslint/parameter-properties': [
			'error',
			{ prefer: 'parameter-property' },
		],
		'@typescript-eslint/prefer-readonly': 'error',
	},
};

export default config;

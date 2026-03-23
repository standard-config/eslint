import { expect, test } from 'vitest';
import transformRules from './index.ts';

test('normalizes rules by default', () => {
	expect(transformRules(undefined, {})).toStrictEqual({});

	const result = transformRules(
		{
			'camelcase': ['warn', { properties: 'always' }],
			'func-name-matching': 'off',
			'no-console': undefined,
		},
		{}
	);

	expect(result).toStrictEqual({
		'camelcase': ['warn', { properties: 'always' }],
		'func-name-matching': 'off',
		'no-console': 'off',
	});
});

test('overrides rule severity', () => {
	const result = transformRules(
		{
			'camelcase': ['warn', { properties: 'always' }],
			'func-name-matching': 'off',
			'no-console': undefined,
		},
		{
			severity: 'error',
		}
	);

	expect(result).toStrictEqual({
		'camelcase': ['error', { properties: 'always' }],
		'func-name-matching': 'error',
		'no-console': 'error',
	});
});

test('omits selected rules', () => {
	const result = transformRules(
		{
			'camelcase': ['warn', { properties: 'always' }],
			'func-name-matching': 'off',
			'no-console': undefined,
		},
		{
			severity: 'error',
			omit: ['camelcase'],
		}
	);

	expect(result).toStrictEqual({
		'func-name-matching': 'error',
		'no-console': 'error',
	});
});

test('prefixes rule names', () => {
	const result = transformRules(
		{
			'camelcase': ['warn', { properties: 'always' }],
			'prefix/func-name-matching': 'off',
			'prefix/no/console': undefined,
		},
		{
			prefix: 'eslint',
		}
	);

	expect(result).toStrictEqual({
		'eslint/camelcase': ['warn', { properties: 'always' }],
		'eslint/func-name-matching': 'off',
		'eslint/no/console': 'off',
	});
});

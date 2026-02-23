import { expect, test } from 'vitest';
import transformRules from './index.ts';

test('returns unchanged rules by default', () => {
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
		'no-console': undefined,
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

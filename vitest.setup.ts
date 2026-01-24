import type { ESLint, Linter } from 'eslint';
import { expect } from 'vitest';

// Exclude plugins from snapshots
expect.addSnapshotSerializer({
	test: (value) => {
		return isParser(value) || isPlugin(value);
	},
	serialize: (value) => {
		return isParser(value) ? '[ESLint.Parser]' : '[ESLint.Plugin]';
	},
});

function isObject(value: unknown): value is Record<string, unknown> {
	return Boolean(value && typeof value === 'object');
}

function isParser(value: unknown): value is Linter.Parser {
	return isObject(value) && Object.hasOwn(value, 'parseForESLint');
}

function isPlugin(value: unknown): value is ESLint.Plugin {
	return (
		isObject(value) &&
		Object.hasOwn(value, 'configs') &&
		Object.hasOwn(value, 'rules')
	);
}

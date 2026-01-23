import type { ESLint, Linter } from 'eslint';
import { expect } from 'vitest';

type Plugin = ESLint.Plugin | Linter.Parser;

// Exclude plugins from snapshots
expect.addSnapshotSerializer({
	test: (value: unknown) => {
		return Boolean(
			value &&
			typeof value === 'object' &&
			typeof (value as Plugin).meta?.name === 'string'
		);
	},
	serialize: (value: Plugin) => {
		return Object.hasOwn(value, 'parseForESLint')
			? '[ESLint.Parser]'
			: '[ESLint.Plugin]';
	},
});

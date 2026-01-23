import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

const config: Linter.Config = {
	name: 'TypeScript (Linter Settings)',
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
		},
	},
	linterOptions: {
		reportUnusedDisableDirectives: 'error',
		reportUnusedInlineConfigs: 'error',
	},
};

export default config;

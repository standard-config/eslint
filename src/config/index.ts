import type { Linter } from 'eslint';
import configFormattingConfigFiles from '../config-formatting-config-files/index.ts';
import configFormatting from '../config-formatting/index.ts';
import configTypeScriptSettings from '../config-typescript-settings/index.ts';
import configTypeScript from '../config-typescript/index.ts';
import includeIgnoreFile from '../include-ignore-file/index.ts';

/**
 * Standard Config for use in an existing config.
 */
const config: Linter.Config[] = includeIgnoreFile([
	{
		name: 'Ignored Paths',
		ignores: ['**/fixtures/**'],
	},
	configTypeScriptSettings,
	configTypeScript,
	configFormatting,
	{
		files: ['**/*.config.*'],
		...configFormattingConfigFiles,
	},
]);

export default config;

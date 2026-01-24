import type { Linter } from 'eslint';
import configFormattingConfigFiles from '../config-formatting-config-files/index.ts';
import configFormatting from '../config-formatting/index.ts';
import configTypeScriptSettings from '../config-typescript-settings/index.ts';
import configTypeScript from '../config-typescript/index.ts';

/**
 * Standard Config for use in an existing config.
 */
const config: Linter.Config[] = [
	configTypeScriptSettings,
	configTypeScript,
	configFormatting,
	{
		files: ['**/*.config.*'],
		...configFormattingConfigFiles,
	},
];

export default config;

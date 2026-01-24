import type { Config } from 'eslint/config';
import { defineConfig as _defineConfig } from 'eslint/config';
import configFormattingConfigFiles from '../config-formatting-config-files/index.ts';
import configFormatting from '../config-formatting/index.ts';
import configIgnores from '../config-ignores/index.ts';
import configOxlint from '../config-oxlint/index.ts';
import configTypeScriptSettings from '../config-typescript-settings/index.ts';
import configTypeScript from '../config-typescript/index.ts';

/**
 * Combine Standard Config with optional additional config.
 */
export default function defineConfig(
	...configs: Parameters<typeof _defineConfig>
): Config[] {
	const configExtension = configs.length > 0 ? _defineConfig(...configs) : [];

	return _defineConfig({
		name: 'Standard Config',
		files: ['**/*.{ts,tsx,cts,mts}'],
		extends: [
			configIgnores,
			configTypeScriptSettings,
			configTypeScript,
			configFormatting,
			{
				files: ['**/*.config.*'],
				...configFormattingConfigFiles,
			},
			configExtension,
			configOxlint,
		],
	});
}

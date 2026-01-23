import { defineConfig } from 'eslint/config';
import configFormattingConfigFiles from './src/config-formatting-config-files/index.ts';
import configStandard from './src/index.ts';

export default defineConfig([
	{
		files: ['**/*.ts'],
		extends: [configStandard],
	},
	{
		files: [
			'src/config/index.ts',
			'src/config-*/index.ts',
			'src/define-config/index.ts',
		],
		extends: [configFormattingConfigFiles],
	},
]);

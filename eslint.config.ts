import configFormatting from './src/config-formatting-config-files/index.ts';
import { defineConfig } from './src/index.ts';

export default defineConfig([
	{
		files: ['src/config-*/index.ts'],
		extends: [configFormatting],
	},
]);

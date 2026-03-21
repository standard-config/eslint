import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { configConfigFiles, defineConfig } from './src/index.ts';

export default defineConfig([
	includeIgnoreFile(path.resolve('.gitignore')),
	{
		react: true,
	},
	{
		files: [
			/* prettier-ignore */
			'src/config-*/index.ts',
			'src/config-*/rules-*.ts',
		],
		extends: [configConfigFiles],
	},
]);

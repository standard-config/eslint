import { configConfigFiles, defineConfig } from './src/index.ts';

export default defineConfig([
	{
		files: ['src/config-*/index.ts', 'src/config-*/rules-*.ts'],
		extends: [configConfigFiles],
		react: true,
	},
]);

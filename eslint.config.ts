import { configConfigFiles, defineConfig } from './src/index.ts';

export default defineConfig([
	{
		files: ['src/config-*/index.ts'],
		extends: [configConfigFiles],
	},
]);

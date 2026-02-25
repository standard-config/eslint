import { defineConfig } from '@standard-config/oxlint';
import { getOxlintConfigs } from './src/utilities.ts';

const { configBase, configConfigFiles } = getOxlintConfigs({
	react: true,
});

export default defineConfig(configBase, {
	categories: {
		nursery: 'error',
	},
	rules: {
		'typescript/no-deprecated': 'off',
	},
	overrides: [
		{
			files: [
				/* prettier-ignore */
				'src/config-*/index.ts',
				'src/config-*/rules-*.ts',
			],
			...configConfigFiles,
		},
	],
});

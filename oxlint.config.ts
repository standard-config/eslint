import { defineConfig } from '@standard-config/oxlint';
import { composeOxlintConfigs } from './src/utilities.ts';

const { configBase, configConfigFiles } = composeOxlintConfigs({
	react: true,
	stylistic: true,
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

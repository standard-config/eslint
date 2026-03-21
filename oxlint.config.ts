import { defineConfig } from '@standard-config/oxlint';
import { getOxlintConfigs } from './src/utilities.ts';

const { oxlintConfigBase, oxlintConfigConfigFiles } = getOxlintConfigs({
	react: true,
});

export default defineConfig(oxlintConfigBase, {
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
			...oxlintConfigConfigFiles,
		},
	],
});

import { defineConfig } from '@standard-config/oxlint';
import { oxlintConfigBase, oxlintConfigConfigFiles } from './src/utilities.ts';

export default defineConfig(oxlintConfigBase, {
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

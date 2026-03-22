import { defineConfig } from '@standard-config/oxlint';
import {
	createOxlintConfig,
	oxlintConfigConfigFiles,
} from './src/utilities.ts';

export default defineConfig({
	extends: [
		createOxlintConfig({
			react: true,
		}),
	],
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

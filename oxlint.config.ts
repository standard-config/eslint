import {
	defineOxlintConfig,
	oxlintConfigConfigFiles,
} from './src/utilities.ts';

export default defineOxlintConfig({
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

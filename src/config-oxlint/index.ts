import type { Linter } from 'eslint';
import pluginOxlint from 'eslint-plugin-oxlint';
import fs from 'node:fs';
import path from 'node:path';

const configPath = path.resolve('.oxlintrc.json');
const configExists = fs.existsSync(configPath);

const config: Linter.Config[] = configExists
	? pluginOxlint.buildFromOxlintConfigFile(configPath, {
			typeAware: true,
		})
	: [];

export default config;

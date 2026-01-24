import type { Linter } from 'eslint';
import oxlint from 'eslint-plugin-oxlint';
import fs from 'node:fs';
import path from 'node:path';

const oxlintConfigFilePath = path.resolve('.oxlintrc.json');
const oxlintConfigFileExists = fs.existsSync(oxlintConfigFilePath);

export default function includeOxlintConfig(): Linter.Config[] {
	return oxlintConfigFileExists
		? oxlint.buildFromOxlintConfigFile(oxlintConfigFilePath, {
				typeAware: true,
			})
		: [];
}

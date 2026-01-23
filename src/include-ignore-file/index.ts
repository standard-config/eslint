import type { Linter } from 'eslint';
import { includeIgnoreFile as _includeIgnoreFile } from '@eslint/compat';
import fs from 'node:fs';
import path from 'node:path';

const ignoreFilePath = path.resolve('.gitignore');
const ignoreFilePathExists = fs.existsSync(ignoreFilePath);

export default function includeIgnoreFile(
	configs: Linter.Config[]
): Linter.Config[] {
	return ignoreFilePathExists
		? [_includeIgnoreFile(ignoreFilePath, '.gitignore'), ...configs]
		: configs;
}

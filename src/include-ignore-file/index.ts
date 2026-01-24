import type { Linter } from 'eslint';
import { includeIgnoreFile as _includeIgnoreFile } from '@eslint/compat';
import fs from 'node:fs';
import path from 'node:path';

const ignoreFilePath = path.resolve('.gitignore');
const ignoreFileExists = fs.existsSync(ignoreFilePath);

export default function includeIgnoreFile(): Linter.Config {
	return ignoreFileExists
		? _includeIgnoreFile(ignoreFilePath, '.gitignore')
		: {};
}

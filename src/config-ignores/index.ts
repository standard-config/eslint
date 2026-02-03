import type { Linter } from 'eslint';
import { includeIgnoreFile as _includeIgnoreFile } from '@eslint/compat';
import fs from 'node:fs';
import path from 'node:path';

const configPath = path.resolve('.gitignore');
const configExists = fs.existsSync(configPath);

const config: Linter.Config = configExists
	? _includeIgnoreFile(configPath, '.gitignore')
	: {};

export default config;

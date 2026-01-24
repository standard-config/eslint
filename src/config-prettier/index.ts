import type { Linter } from 'eslint';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import fs from 'node:fs';
import path from 'node:path';

const configPath = path.resolve('prettier.config.ts');
const configExists = fs.existsSync(configPath);

const config: Linter.Config = configExists ? pluginPrettier : {};

export default config;

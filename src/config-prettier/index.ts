import type { LinterConfigEntry } from '../types/index.d.ts';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import fs from 'node:fs';
import path from 'node:path';

const configPath = path.resolve('prettier.config.ts');
const configExists = fs.existsSync(configPath);

const config: LinterConfigEntry = configExists ? pluginPrettier : {};

export default config;

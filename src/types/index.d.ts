import type { Linter } from 'eslint';

export type LinterConfigEntry = Omit<Linter.Config, 'files'>;

[![](https://img.shields.io/npm/v/%40standard-config%2Feslint)](https://www.npmjs.com/package/@standard-config/eslint)
[![](https://img.shields.io/github/actions/workflow/status/standard-config/eslint/test.yaml)](https://github.com/standard-config/eslint/actions/workflows/test.yaml)
[![](https://img.shields.io/codecov/c/github/standard-config/eslint)](https://codecov.io/github/standard-config/eslint)

# @standard-config/eslint

TypeScript-first ESLint config designed to complement Oxlint and Prettier.

## Install

```sh
npm install --save-dev @standard-config/eslint
```

```sh
pnpm add --save-dev @standard-config/eslint
```

## Usage

Create your `eslint.config.ts`:

```ts
import { defineConfig } from '@standard-config/eslint';

export default defineConfig();
```

You can also include the config in an existing setup.

```ts
import standardConfig from '@standard-config/eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig({
    files: ['**/*.ts'],
    extends: [standardConfig],
});
```

## Recommended

Try [**@standard-config/prettier**](https://github.com/standard-config/prettier) if you’re looking for a consistent, TypeScript-first Prettier config.

## License

MIT © [Dom Porada](https://dom.engineering)

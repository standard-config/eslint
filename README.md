[![](https://img.shields.io/npm/v/%40standard-config%2Feslint)](https://www.npmjs.com/package/@standard-config/eslint)
[![](https://img.shields.io/github/actions/workflow/status/standard-config/eslint/test.yaml)](https://github.com/standard-config/eslint/actions/workflows/test.yaml)
[![](https://img.shields.io/codecov/c/github/standard-config/eslint)](https://codecov.io/github/standard-config/eslint)

# @standard-config/eslint

TypeScript-first ESLint config designed to complement [**@standard-config/oxlint**](https://github.com/standard-config/oxlint). Enforces rules not yet [implemented in Oxlint](https://github.com/oxc-project/oxc/issues/481).

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

### React

Standard Config includes a set of React-related rules that are off by default. You can enable them by setting `react: true` in the root of your config.

```ts
import { defineConfig } from '@standard-config/eslint';

export default defineConfig({
    react: true,
});
```

## Related

- [**@standard-config/oxlint**](https://github.com/standard-config/oxlint)
- [**@standard-config/prettier**](https://github.com/standard-config/prettier)
- [**@standard-config/tsconfig**](https://github.com/standard-config/tsconfig)

## License

MIT © [Dom Porada](https://dom.engineering)

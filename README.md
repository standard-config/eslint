[![](https://img.shields.io/npm/v/%40standard-config%2Feslint)](https://www.npmjs.com/package/@standard-config/eslint) [![](https://img.shields.io/github/actions/workflow/status/standard-config/eslint/test.yaml)](https://github.com/standard-config/eslint/actions/workflows/test.yaml) [![](https://img.shields.io/codecov/c/github/standard-config/eslint)](https://codecov.io/github/standard-config/eslint)

# @standard-config/eslint

TypeScript-first ESLint config designed to complement [**@standard-config/oxlint**](https://github.com/standard-config/oxlint). Focuses primarily on stylistic and React-related rules not available in Oxlint.

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

The React-related rules included with Standard Config are off by default. You can enable them by setting `react: true` at the root of your config.

```ts
import { defineConfig } from '@standard-config/eslint';

export default defineConfig({
    react: true,
});
```

### Skipping ESLint

Standard Config comes with a set of utilities that can translate this config to Oxlint, eliminating the need to run ESLint. This relies on Oxlint’s experimental [JS Plugins](https://oxc.rs/docs/guide/usage/linter/js-plugins.html) support.

In your `oxlint.config.ts`:

```ts
import { getOxlintConfigs } from '@standard-config/eslint/utilities';
import { defineConfig } from '@standard-config/oxlint';

const { configBase, configConfigFiles } = getOxlintConfigs({
    // Optional, as above
    react: true,
});

// Merge `configBase` at the root of your config, as it defines
// all supported third-party rules from this config, including
// the resolved `jsPlugins`
export default defineConfig(configBase, {
    react: true,
    rules: {
        // Example override
        'react-js/function-component-definition': 'off',
    },
    overrides: [
        {
            // `configConfigFiles` is an optional override entry
            // intended for config files other than `**/*.config.ts`
            // (those are already covered by `configBase`)
            files: ['config/**/*.ts'],
            ...configConfigFiles,
        },
    ],
});
```

## Related

- [**@standard-config/oxlint**](https://github.com/standard-config/oxlint)
- [**@standard-config/prettier**](https://github.com/standard-config/prettier)
- [**@standard-config/tsconfig**](https://github.com/standard-config/tsconfig)

## License

MIT © [Dom Porada](https://dom.engineering)

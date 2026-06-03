<p align="center">
    <a href="https://github.com/standard-config/eslint">
        <img
            src="https://github.com/standard-config/.github/blob/main/.github/assets/standard-config-eslint@3x.png?raw=true"
            width="500"
            alt=""
        />
    </a>
</p>

<h1 align="center">@standard&#8209;config/eslint</h1>

<p align="center">A companion to&nbsp;Oxlint.</p>

<p align="center">
    <a href="https://npmx.dev/package/@standard-config/eslint"
        ><img
            src="https://img.shields.io/npm/v/%40standard-config%2Feslint?style=flat-square"
            alt=""
    /></a>
    <a href="https://github.com/standard-config/eslint"
        ><img
            src="https://img.shields.io/badge/status-deprecated-important?style=flat-square"
            alt=""
    /></a>
</p>

<div>&nbsp;</div>

## Overview

TypeScript-first ESLint config designed to complement [**@standard-config/oxlint**](https://github.com/standard-config/oxlint). Focuses primarily on stylistic and React-related rules not available in Oxlint.

> [!IMPORTANT]
>
> This package is deprecated. Use the [supplemental Oxlint configs](https://github.com/standard-config/oxlint#supplemental-configs) instead.

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

## Related

- [**@standard-config/oxlint**](https://github.com/standard-config/oxlint)
- [**@standard-config/prettier**](https://github.com/standard-config/prettier)
- [**@standard-config/tsconfig**](https://github.com/standard-config/tsconfig)

## License

MIT © [Dom Porada](https://dom.engineering)

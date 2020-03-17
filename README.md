[![](https://circleci.com/gh/MyOnlineStore/bricks/tree/master.svg?style=shield)](https://circleci.com/gh/MyOnlineStore/bricks/tree/master) [![](https://api.codeclimate.com/v1/badges/af815fd9f588fcf86d8f/test_coverage)](https://codeclimate.com/github/MyOnlineStore/bricks/test_coverage) [![](https://api.codeclimate.com/v1/badges/af815fd9f588fcf86d8f/maintainability)](https://codeclimate.com/github/MyOnlineStore/bricks/maintainability) [![](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![](https://badges.frapsoft.com/os/gpl/gpl.png?v=103)](https://opensource.org/licenses/GPL-3.0/) [![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
# Bricks

Bricks is an open source component library built by [MyOnlineStore](https://www.myonlinestore.com). It uses React, TypeScript (optional) and [styled-components](https://www.styled-components.com/).

Some nice features:
- Flexible theming
- Fully tested
- Fully typed
- Testable via `data-testid` attributes

## Try it out!

[**Storybook**](https://myonlinestore.github.io/bricks)

[**Playground**](https://codesandbox.io/s/myonlinestorebricks-playground-pymwz)

## Installation

Install Bricks using: `npm install @myonlinestore/bricks`.

## Usage
#### Basic usage
All components are named exports. For instance:

```typescript
import { Button } from '@myonlinestore/bricks';

<Button title="Click me!" variant="primary" />
```

#### ThemeProvider

Bricks uses styled-components to make it flexible in theming. This requires your application to have a ThemeProvider somewhere up in the component tree. Bricks comes with our own `MosTheme` or you can create your own custom theme.

**MosTheme**
```typescript
import { MosTheme } from '@myonlinestore/bricks';
import YourApp from './App';

<MosTheme>
    <YourApp />
</MosTheme>
```
 
**Custom Theme**
```typescript
import { CustomTheme, ThemeType } from '@myonlinestore/bricks';
import YourApp from './App';

const themeObject: ThemeType = {
    // See ThemeType for all theme options
    // Example: https://github.com/MyOnlineStore/bricks/blob/master/src/themes/MosTheme/MosTheme.theme.ts
}

<CustomTheme theme={themeObject}>
    <YourApp />
</CustomTheme>
```

## Contributing

Feel free to help us develop Bricks! If you have a new feature suggestion please create an issue with the label `RFC` so we can discuss the desired solution. For more info please read our 
[guidelines](https://github.com/MyOnlineStore/bricks/blob/master/CONTRIBUTING.md).

## Development
- Clone the repo
- Run `npm install`
- Run either `npm run dev:components` to start the dev-server running on `localhost:9001` or run `npm run build` to build a dist 
to be used with `npm link`

## Publishing
We use Lerna to publish packages. It is configured to version packages separately and uses the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to determine the next semantic version and generate release notes in the CHANGELOG.md inside the package. With every PR, the title must be a conventional commit message (there is a check in place). In short:
- If it's a patch, use the type `fix: ...`.
- If it's a minor, use the type `feat: ...`.
- If there are breaking changes you still use `feat: ...`, but with a `BREAKING CHANGE: ...` in the footer. You can use multiple `BREAKING CHANGE: ...` lines per pull request.
- If it's not a feature or bugfix you can use one of the other types: `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`.
- You can scope fixes or features for clearer documentation, e.g. `feat(Badge): ...`

To publish a package simply run `yarn release` in the root and lerna will check for which packages to publish. For canary releases run `yarn release --canary [major|minor|patch]`.

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0/)

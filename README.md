[![](https://circleci.com/gh/MyOnlineStore/bricks/tree/master.svg?style=shield)](https://circleci.com/gh/MyOnlineStore/bricks/tree/master) [![](https://api.codeclimate.com/v1/badges/af815fd9f588fcf86d8f/test_coverage)](https://codeclimate.com/github/MyOnlineStore/bricks/test_coverage) [![](https://api.codeclimate.com/v1/badges/af815fd9f588fcf86d8f/maintainability)](https://codeclimate.com/github/MyOnlineStore/bricks/maintainability) [![](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![](https://badges.frapsoft.com/os/gpl/gpl.png?v=103)](https://opensource.org/licenses/GPL-3.0/) [![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
# Bricks

Bricks is an open source component library build by [MyOnlineStore](https://www.myonlinestore.com). It is build with React, TypeScript (optional) and styled-components, which makes it super flexible in theming.

## Installation

Install it using: `npm install @myonlinestore/bricks`.

## Usage
#### Basic usage
All components are named exports. For instance:

```typescript
import { Button } from '@myonlinestore/bricks';

<Button />
```

#### ThemeProvider

Bricks uses styled-components to make it flexible in theming. This requires your application to have a ThemeProvider somewhere up in the component tree.

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
import { MerchantTheme, ThemeType } from '@myonlinestore/bricks';
import YourApp from './App';

const themeObject: ThemeType = {
    // See ThemeType for all theme options
}

<MerchantTheme theme={themeObject}>
    <YourApp />
</MerchantTheme>
```

## Contributing

Feel free to help us develop Bricks! If you have a new feature suggetion please create an issue with the label `RFC` so we can discuss the desired solution. For more info please read our 
[guidelines](https://github.com/MyOnlineStore/bricks/blob/master/CONTRIBUTING.md).

- Clone the repo
- Run `npm install`
- Run either `npm run watch` to start the dev-server running on `localhost:9001` or run `npm run build` to build a dist 
to be used with `npm link`

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0/)
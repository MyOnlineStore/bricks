[![](https://circleci.com/gh/MyOnlineStore/bricks/tree/master.svg?style=shield)](https://circleci.com/gh/MyOnlineStore/bricks/tree/master) [![](https://api.codeclimate.com/v1/badges/af815fd9f588fcf86d8f/test_coverage)](https://codeclimate.com/github/MyOnlineStore/bricks/test_coverage) [![](https://api.codeclimate.com/v1/badges/af815fd9f588fcf86d8f/maintainability)](https://codeclimate.com/github/MyOnlineStore/bricks/maintainability) [![](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![](https://badges.frapsoft.com/os/gpl/gpl.png?v=103)](https://opensource.org/licenses/GPL-3.0/) [![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

❗️This project is in alpha. Styling/functionality will vary wildly between versions.❗️

# Bricks

## Setup

### Use it:
Install it using: `npm install @myonlinestore/bricks`.

All components are named exports. For instance:
```typescript
import { Button } from '@myonlinestore/bricks';

<Button />
```

### Run it:

- clone the repo
- run `npm install`
- run either `npm run watch` to start the dev-server running on localhost:9001 or run `npm run build` to build a dist to be used with `npm link`

## Code conventions

### Props 
Props should be short. No prefixes just the essence of what it does like `show` or `error`. Just like html attributes. 

```
👍 error='Oops an error occurred'
----
👎 hasError='Oops an error occurred'
```


### Function names and state props
Functions and state should describe what's happening and when it's happening. Therefore the name should start with the moment of execution like  `or`, `after`, `while` etc. The next part should be what, the action its executing. 

```
👍 onClose()
----
👎 closeAction()
```

### Types
Types should end with the `Type` suffix. This makes them easy to identify as such in usage.

```
👍 type ButtonVariantType = {...}
----
👎 type ButtonVariant = {...}
```

### Variables 
We try to keep the documentation to a minimum. Therefore the variables should provide context to what it does and indirectly explain what is happening in the code. So no single letter variables 🙂
```
👍 const windowToggle = true
----
👎 const t = true
```
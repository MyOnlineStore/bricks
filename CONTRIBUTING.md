# Contributing

## Code conventions
To help maintain a consistent experience for users (and contributors) we have a few conventions around the naming of variables and props.

### Props 
We like make sure components resemble html as much as possible. This makes for a familiar experience in usage. Try to keep the naming of props als terse as possible.

```tsx
// 👍 
<Checkbox error={this.props.error} />
```

```tsx
// 👎 
<Checkbox errorMessage={this.props.error} />
```

### Callbacks
When passing a callback to a component. It is important to note that the code is ran in response to a specific event. Therefore we name the property according to the event you are "subscribing" to. If you want a user to be able to act when your component is clicked. You could create a prop called onClick. We try to opt for `on....` since that is a community convention and matches the js runtime best.

```tsx
// 👍
<Button onClick={handleClick} />
```

```tsx
// 👎 
<Button action={handleClick} />
```

### Types
Since types, classes and components share the same capitalization conventions, we add a `Type` suffix to make sure that they are easy to distinguish from eachother.

```tsx
// 👍 
type FooType = {...}
```

```tsx
// 👎 
type Foo = {...}
```

### Variables
In contrast to props, regular variables should be easy to distinguish from functions and. They should also properly describe their content. Because of this try to avoid single letter variables since they can obfuscate code for beginners.

```tsx
// 👍
const handleClick = (event) => {}
```

```tsx
// 👎
const handleClick = (e) => {}
```

```tsx
// 👍
const isShown = true;
const show = () => {}
```

```tsx
// 👎
const show = true;
const open = () => {}
```

All other conventions will be enforced by prettier. You can set prettier up to run in most IDE's but we will also format your code before you push your code.

## Docs
Bricks comes with a docs website. This website generates it's content by pulling text from readme.mdx files colocated with components.

### Writing readme's
Components readme's are written in [MDX](https://mdxjs.com/). This let's you render the component along with your textual content the same way like you would with JSX. To render a component from bricks in your readme. Make sure to add an import statement to the readme.

You should import the component like you would in a external application. You __cannot__ use relative imports in your readme's since the docs install a symlinked version of the bricks build results.

```md
import { Foo } from '@myonlinestore/bricks';

# Foo

## Examples
<Foo bar />
```

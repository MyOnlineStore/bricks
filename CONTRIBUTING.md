# Code conventions


### Props 
Props should be named like html attributes. Just the essence of what it does like `show` or `error`. Only function props should have prefixes.

```tsx
👍 <Checkbox error={this.props.error}>
----
👎 <Checkbox errorMessage={this.props.error}>
```


### Callbacks
Functions should describe what's happening. External callbacks should be prefixed with `on`. Internal functions should respond to the requested action like handleRequestedAction. Prefix should be handle followed by the action like `click`, `hover`, `mouseEnter` etc. Try to avoid ambiguous terms like `action`. 

*External:*
```tsx
👍 <Button onClick={handleClick} />
----
👎 <Button action={handleClick} />
```
*Internal:*
```tsx
👍 <StyledButton onHover={handleHover} />
----
👎 <StyledButton hover={onHover} />
```


### Types
Types should end with the `Type` suffix. This makes them easy to identify as such in usage.

```ts
👍 type ButtonVariantType = {...}
----
👎 type ButtonVariant = {...}
```

### State Variables 
The variables should provide context to what it does and indirectly explain what is happening in the code. So no single letter variables 🙂. Internal booleans should be prefixed with verbs like `is`, `has`, `should` etc.

```tsx
👍  <Checkbox checked={this.state.isChecked} />

----
👎  <Checkbox checked={this.state.checked} /> 
```
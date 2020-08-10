### This PR:

[issue description]
-- or --
resolves #[resolved issue number]

**Breaking changes** 🔥
- Component `Foo` has been removed.
- Component `Bar` no longer supports prop `x`, you should use prop `y` from now on.
- Component `FooBar` has been redesigned.

**Backwards compatible additions** ✨
- Component `Foo` now also supports an optional `size` props to increase it's size.
- The new component `Bar` has been added.

**Bugfixes/Changed internals** 🎈
- Component `Foo` now uses the correct icon.
- Refactored some components.

**Checklist** 🛡
- [ ] I have exported my addition from `src/index.ts` (check if not applicable).
- [ ] Appropriate tests have been added for my functionality (check if not applicable).
- [ ] A designer has seen and approved my changes (tag `@LuukHorsmans` or `@RianneSchaekens` for a design review when applicable).
- [ ] I have tested my addition in all supported browsers and for responsiveness (Chrome, Firefox, Safari, Edge, IE11 and mobile browsers).
- [ ] Appropriate documentation has been written (check if not applicable).

<details>
  <summary>ℹ️ Conventional commit help</summary>

  - Use `fix: ...` for patches
  - Use `feat: ...` for a minor change
  - Use `feat!: ...` for features with breaking changes
  - Optionally you can use a scope `feat(SomeContainer)!: ...`
  - A breaking change **must** have `BREAKING CHANGE: ...` in the commit message
  - You can use multiple `BREAKING CHANGE: ...` lines in the commit message
  - Use `build`, `chore`, `ci`, `docs`, `perf`, `refactor`, `style`, or `test`  for other types

  _Tip: make sure the first commit message is the one you want to merge, because that's the one Github picks for squashing_
</details>
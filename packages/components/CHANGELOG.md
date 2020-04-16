# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/MyOnlineStore/bricks/compare/@myonlinestore/bricks@3.0.0...@myonlinestore/bricks@3.0.1) (2020-04-16)


### Bug Fixes

* **Button:** Make sure plain button border is rendered in Chrome ([5197384](https://github.com/MyOnlineStore/bricks/commit/5197384baa38bc42f499454146a526c0eaf08a54))
* **Checkbox:** replace intermediate state icon ([#536](https://github.com/MyOnlineStore/bricks/issues/536)) ([2651c0a](https://github.com/MyOnlineStore/bricks/commit/2651c0a826586d5646564371c907a21aa04f065e))
* **Range, Slider:** prevent style overrides ([#540](https://github.com/MyOnlineStore/bricks/issues/540)) ([06cd534](https://github.com/MyOnlineStore/bricks/commit/06cd534ad5186c3c23e26003d538634113e83140))
* **TextualButton:** Prevent hover styles being overridden, change fontweight ([#539](https://github.com/MyOnlineStore/bricks/issues/539)) ([229a072](https://github.com/MyOnlineStore/bricks/commit/229a0722e2d326f1a466c57ebc50569001af5277))
* implement bricks 3 changes in design system site ([#538](https://github.com/MyOnlineStore/bricks/issues/538)) ([7a34539](https://github.com/MyOnlineStore/bricks/commit/7a34539eba2eb8a7bbcaa4b1c300d9c92ffffc34))





# 3.0.0 (2020-04-10)


### Bug Fixes

* **Button:** Remove ::before ([#534](https://github.com/MyOnlineStore/bricks/issues/534)) ([42ba0ce](https://github.com/MyOnlineStore/bricks/commit/42ba0ce1db4ac363976378276ae3e00c601a606c))
* Ensure correct placement with multiline labels ([#533](https://github.com/MyOnlineStore/bricks/issues/533)) ([8180c82](https://github.com/MyOnlineStore/bricks/commit/8180c82666dd001623035c9e35a9981a63836ef7))
* **IconButton:** explicit styling to prevent cascading properties ([#532](https://github.com/MyOnlineStore/bricks/issues/532)) ([a3a1ebe](https://github.com/MyOnlineStore/bricks/commit/a3a1ebe323b02cd51912ac5ddf984a4f03eeed04))
* Bricks 3.0 - Styling Improvements ([#530](https://github.com/MyOnlineStore/bricks/issues/530)) ([6afee83](https://github.com/MyOnlineStore/bricks/commit/6afee83d02515cc581e1256a02c334fd7782d65c))
* Toggle margin ([#525](https://github.com/MyOnlineStore/bricks/issues/525)) ([5a96407](https://github.com/MyOnlineStore/bricks/commit/5a964077470c825c790d6bbd9838a80d69727971))


### Features

* **Notification:** new Notification styling ([#535](https://github.com/MyOnlineStore/bricks/issues/535)) ([da76ec5](https://github.com/MyOnlineStore/bricks/commit/da76ec5cedafd077289d8588d3e69084a0ea489a))
* **Toggle:** removed unavailable prop ([#528](https://github.com/MyOnlineStore/bricks/issues/528)) ([eee793e](https://github.com/MyOnlineStore/bricks/commit/eee793e36fa4e5ef241cc1cd078eb9fcaabadc60))
* Added esm bundles and bundling ([#513](https://github.com/MyOnlineStore/bricks/issues/513)) ([1393177](https://github.com/MyOnlineStore/bricks/commit/13931777bba856f12d6ddf243e148288ced23db3))
* adjust MOS corporate Button theming to match 3.0 styling ([#523](https://github.com/MyOnlineStore/bricks/issues/523)) ([cc868b9](https://github.com/MyOnlineStore/bricks/commit/cc868b92c94eb7877a6c8839ccc87c06891968c9))
* apply new typography styling ([#517](https://github.com/MyOnlineStore/bricks/issues/517)) ([ef5b4ae](https://github.com/MyOnlineStore/bricks/commit/ef5b4ae90956e93e215310ac56f165d8033a770a))
* Implement 3.0 Badges ([#522](https://github.com/MyOnlineStore/bricks/issues/522)) ([24d059f](https://github.com/MyOnlineStore/bricks/commit/24d059f6fe3b2421aafe0f4c3275141ac7771002))
* implement 3.0 Button design ([#518](https://github.com/MyOnlineStore/bricks/issues/518)) ([ceea7c4](https://github.com/MyOnlineStore/bricks/commit/ceea7c4e17892093a5a23ab5385f726f3c02df03))
* implement 3.0 Form Element design ([#519](https://github.com/MyOnlineStore/bricks/issues/519)) ([f5b594b](https://github.com/MyOnlineStore/bricks/commit/f5b594b033dab278fe80f88215ac47d88abe5381))
* implement 3.0 Form fields design ([#521](https://github.com/MyOnlineStore/bricks/issues/521)) ([bbf3a40](https://github.com/MyOnlineStore/bricks/commit/bbf3a4025896a41642826b3062795e2d92214748))
* implement 3.0 FormRow design  ([#520](https://github.com/MyOnlineStore/bricks/issues/520)) ([c2116c7](https://github.com/MyOnlineStore/bricks/commit/c2116c704cbf19cdec6abd559e981128cc0d3a5c))


### BREAKING CHANGES

* Button ThemeType in MosCorporateTheme
* Badge now uses variant instead of severity as prop
* Altered Badge ThemeType
* Counter should now be used for legacy uses of Badge
* Altered ThemeTypes for NativeSelect, Select, TextArea and TextField
* FormRow is now part of the ThemeType to decide it's disabled styling.
* Altered ThemeTypes for CheckBox, RadioButton, Toggle, Slider and Range
* MultiButton has been removed
* New disabled states
* Button ThemeType now requires info variant, border instead of textDecoration in the plain button theme object, disabled theme split in primary, secondary and plain variants.
* Removes 6 from Heading hierarchy levels



# 2.0.0 (2020-02-26)

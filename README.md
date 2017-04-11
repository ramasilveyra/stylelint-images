# stylelint-images

[![NPM version](https://img.shields.io/npm/v/stylelint-images.svg)](https://www.npmjs.com/package/stylelint-images)

A collection of rules to check images for [stylelint](https://github.com/stylelint/stylelint) (in a form of a plugin).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [List of rules](#list-of-rules)
- [Contribute](#contribute)
- [License](#license)

## Installation

stylelint-images is a plugin for [stylelint](http://stylelint.io/user-guide/), so it's meant to be used with it.

**Node.js v4.2.1 or newer** is required. That's because stylelint itself [doesn't support Node.js versions below 4](https://github.com/stylelint/stylelint/blob/43b18fe4c56e9f177644b50354fb8efe9fb34a84/package.json#L36).

First, install stylelint-images (and stylelint, if you haven't done so yet) via NPM:

```
npm install -D stylelint@^7.10.0 stylelint-images
```

Or if you use Yarn:

```
yarn add stylelint@^7.10.0 stylelint-images -D
```

## Usage

Create the `.stylelintrc.json` config file (or open the existing one), add `stylelint-images` to the plugins array and the rules you need to the rules list. All rules from stylelint-images need to be namespaced with `scss`.

```json
{
  "plugins": [
    "stylelint-images"
  ],
  "rules": {
    "images/broken": true,
    "images/prefer-data-uri": 256,
    "images/unoptimized": true,
    ...
  }
}
```

Please refer to [stylelint docs](http://stylelint.io/user-guide/) for the detailed info on using this linter.

### List of rules

- [`broken`](./src/rules/broken/README.md): Checks if the images are broken.
- [`prefer-data-uri`](./src/rules/prefer-data-uri/README.md): Suggest using data-URIs instead of an external image if their file size (in bytes) exceeds the limit.
- [`unoptimized`](./src/rules/unoptimized/README.md): Checks if the images are unoptimized.

## Contribute

Feel free to dive in! [Open an issue](https://github.com/ramasilveyra/stylelint-images/issues/new) or submit PRs.

stylelint-images follows the [Contributor Covenant](https://contributor-covenant.org/version/1/4/) Code of Conduct.

## License

stylelint-images is [MIT licensed](./LICENSE.md).

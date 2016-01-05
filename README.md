# [CSS Basics](http://christoph-heich.de/css-basics)

You're the web artist. So... why should a CSS framework restrict your artistry?

CSS Basics is built to start styling your page without worry about any position
and behavior problems. It's mobile first and scales up to (extra) large displays.

If you have suggestions of improvements or bug reports, please feel free to
create a new issue via the [issue tracker](https://github.com/cheich/CSS-Basics/issues)
or open a new [pull request](https://github.com/cheich/CSS-Basics/pull/new/master).

Take a look at the [project page](http://christoph-heich.de/css-basics) to see
full documentation.

## To-do

Note that we are still in alpha. There are some things to-do:

- [x] Add a better starting point (theme)
- [ ] Update documentation
  - [x] Move to Markdown documentation
  - [ ] Add mixin documentation
  - [x] Parse Markdown files to HTML
  - [x] Add examples previews on HTML view
  - [x] Fix style issues; Add table styles
  - [x] ~~Encapsulate example styles (to toggle it)~~
  - [x] Add (syntax) Highlight
- [ ] Update Bootstraps gridsystem (waiting for Bootstrap 4 release)
- [x] Update Gulpfile
- [x] Update HISTORY
- [x] Update README
- [x] Replace most styles with mixins (excepts resets)
  - [x] Helpers
  - [x] Layouts
  - [x] Menus
  - [x] Positions
  - [x] Tables
  - [x] Typography
- [ ] Optimize mixins
  - [ ] Font loader
  - [x] Button toggle (changed - test it)
  - [ ] Orientations
- [ ] Add more functions / Move some mixins to functions
- [x] Optimize selectors
  - [x] Unquote (list-) strings (via function)
  - [x] Check input and text fields
- [ ] Encapsulate resets (?)
- [x] Optimize selectors
- [x] Set figure width not to 100% (via `display: table`)
- [ ] Reset border in `.button-toggle` with `input-group`
- [ ] Input group label

## Features

- No styles - just basics
- Include only components that you need - compiled with [Sass](http://sass-lang.com/)
- Responsive and adaptive - mobile first
- RTL support
- Easy implementation - just a few classes
- Powered and inspirited by [Bootstrap](http://getbootstrap.com/)
- Very lightweight

## Install

- Bower: `bower install css-basics`
- npm: `npm install css-basics`
- zip: [download](https://github.com/cheich/CSS-Basics/archive/master.zip)

## Setup

Just include [__basics.css__](/dist/basics.css) before all other Style Sheets
and JavaScripts.

```html
<link rel="stylesheet" type="text/css" href="path/to/basics.css" />
```

## Custom build

It's still to heavy? No problem! Check out the [custom dist](/dist/custom).
Maybe there is a compiled version for your needs.

If not, you can compile your custom _CSS Basics_ easily with all components
that you need:

1. Setup your custom build via `scss/basics.scss`
2. Compile `scss/basics.scss` with Sass (You should use
  [Autoprefixer](https://github.com/postcss/autoprefixer))

  You can also use our gulpfile.js to build your custom dist:

  ```
  gulp basics --custom {optional dist name}
  ```

3. Link your new custom build

  ```html
  <link rel="stylesheet" type="text/css" href="path/to/custom/build.css" />
  ```

## Browser Support

All major browsers like Chrome, Firefox and Safari are supported.

Since v4.0, IE<9 and FF<19 support is dropped. If you want to support these you
can still use the old version 3.x.

## Release notes

Each main version is mostly backward-compatible.
See the [history](https://github.com/cheich/CSS-Basics/blob/master/HISTORY.md)
to see all changes and fixes.

## License

_CSS Basics_ is released under the
[MIT license](https://github.com/cheich/CSS-Basics/blob/master/LICENSE)

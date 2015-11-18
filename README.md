# [CSS Basics](http://christoph-heich.de/css-basics)

You're the web artist. So... why should a CSS framework restrict your artistry?

CSS Basics is built to start styling your page without worry about any position and behavior problems. It's mobile first and scales up to (extra) large displays.

If you have suggestions of improvements or bug reports, please feel free to create a new issue via the [issue tracker](https://github.com/cheich/CSS-Basics/issues).

Take a look at the [project page](http://christoph-heich.de/css-basics) to see full documentation.

## To-do

Note that we are still in alpha. There are some things to-do:

 * [ ] Update Documentation
 * [ ] Update Gulpfile
 * [ ] Update HISTORY
 * [ ] Update README

## Features

 * No styles - just basics
 * Include only components that you need - compiled with [Sass](http://sass-lang.com/)
 * Responsive and adaptive - mobile first
 * RTL support
 * Easy implementation - just a few classes
 * Powered and inspirited by [Bootstrap](http://getbootstrap.com/)
 * Very lightweight

## Setup

Just include [__basics.min.css__](/dist/basics.min.css) before all other Style Sheets and JavaScripts.

```html
<link rel="stylesheet" type="text/css" href="path/to/basics.min.css" />
```

## Custom build

It's still to heavy? No problem!<br />
Check out the [custom dist](/dist/custom). Maybe there is a compiled version for your needs.

If not, you can compile your custom _CSS Basics_ easily with all components that you need:

 1. Setup your custom build via `scss/_setup.scss`
 2. Compile `scss/basics.scss` with Sass
    `sass basics.scss basics.custom.css --autoprefix`<br />
    _Note:_ [`--autoprefix`](https://github.com/less/less-plugin-autoprefix) 
 3. Link your new custom build

## Browser Support

All major browsers like Chrome, Firefox and Safari are supported.

Since v4.0, IE<9 and FF<19 support is dropped. If you want to support these you can still use the old v3.0 version.

_CSS Basics_ is compiled with default [browserlist](https://github.com/ai/browserslist) configurations:
```
> 1%, last 2 versions, Firefox ESR, Opera 12.1
```

## Release notes

Each main version is mostly backward-compatible.
See the [history](https://github.com/cheich/CSS-Basics/blob/master/HISTORY.md) to see all changes and fixes.
    
## License

_CSS Basics_ is released under the [MIT license](https://github.com/cheich/CSS-Basics/blob/master/LICENSE.md)
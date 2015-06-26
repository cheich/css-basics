# [CSS Basics](http://cheich.github.io/CSS-Basics/)

You're the web artist. So... why should a CSS framework restrict your artistry?

CSS Basics is built to start styling your page without worry about any position and behaviour problems. It's mobile first and scales up to large displays.

If you have suggestions of improvements or bug reports, please feel free to create a new issue via the [issue tracker](https://github.com/cheich/CSS-Basics/issues).

## Features
* No styles - just basics
* Include only components that you need - compiled with [{less}](http://lesscss.org/)
* Responsive and adaptive - mobile first
* RTL support
* Easy implementation - just a few classes
* Very lightweight

## Setup
Just include [**basics.min.css**](/build/basics.min.css) before all other stylesheets and javascripts.
```html
<link rel="stylesheet" type="text/css" href="path/to/basics.min.css" />
```

## Custom build
It's still to heavy? No problem!<br />
Since version 3.0, you can compile your custom _CSS Basics_ easily with all components that you need:
 1. Setup your custom build via [`setup.less`](/src/setup.less)
 2. Compile [`basics.less`](/src/basics.less) with [{less}](http://lesscss.org/)<br />
    `lessc basics.less basics.custom.min.css --autoprefix --clean-css`<br />
    *Note:* `--autoprefix` and `--clean-css` requires additional less-plugins. 
 3. Link your new custom build

## Included
 * WordPress core
 * Tables
 * Positioning
 * Orientations
 * Menus
 * Images
 * Helpers
 * Forms
 * Externals
   * [Normalize.css](https://necolas.github.io/normalize.css/)
   * Bootstrap [grid system](http://getbootstrap.com/css/#grid), [responsive utilities](http://getbootstrap.com/css/#responsive-utilities), [responsive embed](http://getbootstrap.com/components/#responsive-embed) and [media object](http://getbootstrap.com/components/#media) - that components from Bootstrap doesn't include any style/theme

## Browser Support
All major browsers like Chrome, Firefox and Safara are supported.<br />
_CSS Basics_ is compiled with default [`browserlist`](https://github.com/ai/browserslist) configurations:<br />
`> 1%, last 2 versions, Firefox ESR, Opera 12.1`

IE < 9 doesn't support this requirements:
 * Media Queries<br />
  *Affects:* All responsive utilities<br />
  *Solution:* Include [respond.js](https://github.com/scottjehl/Respond)
 * 2D Transform<br />
  *Affects:* Component _Positions_<br />
  *Solution:* Include positions.ie.less while compiling - Requires to set width/height

## Release notes
Each main version is mostly backward-compatible.
See the [history](https://github.com/cheich/CSS-Basics/blob/master/HISTORY.md) to see all changes and fixes.
    
## License
_CSS Basics_ is released under the [MIT license](https://github.com/cheich/CSS-Basics/blob/master/LICENSE.md)
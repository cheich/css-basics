# [CSS Basics](http://cheich.github.io/CSS-Basics/)

You're the web artist. So... why should a CSS framework restrict your artistry?

CSS Basics is built to start styling your page without worry about any position and behaviour problems. It's mobile first and scales up to large displays with Twitters incredible Bootstrap [grid system](http://getbootstrap.com/css/#grid) and [responsive utilities](http://getbootstrap.com/css/#responsive-utilities).

### !! Docu not up to date - coming soon in the next few days !!
Take a look at the [project page](https://cheich.github.io/CSS-Basics/) to see full documentation.
### !! Docu not up to date - coming soon in the next few days !!

## Features
* No styles - just basics
* Include only components that you need - compiled with [{less}](http://lesscss.org/)
* Responsive and adaptive - mobile first
* RTL support
* Easy implementation - mostly without classes
* Lightweight - only ~20 KB with all components

## Setup
Just include [**basics.min.css**](/build/basics.min.css) before all other stylesheets and javascripts.
```html
<link rel="stylesheet" type="text/css" href="path/to/basics.min.css" />
```

## Custom build
It's still to heavy? No problem!<br />
Since v3, you can compile your custom _CSS Basics_ easily:

1. Setup your custom build with [`setup.less`](/src/setup.less)
2. Compile [`basics.less`](/src/basics.less) with [{less}](http://lesscss.org/)<br />
   `lessc basics.less basics.custom.min.css --autoprefix --clean-css`<br />
   *Note:* `--autoprefix` and `--clean-css` requires additional less-plugins. 
3. Link your new custom build

## Included
* Forms
* Helpers
* Menus
* Orientations
* Positions
* Tables
* WordPress core
* Externals
  * [Normalize.css](https://necolas.github.io/normalize.css/)
  * Bootstrap [grid system](http://getbootstrap.com/css/#grid), [responsive utilities](http://getbootstrap.com/css/#responsive-utilities), [responsive embed](http://getbootstrap.com/components/#responsive-embed) and [media object](http://getbootstrap.com/components/#media) - that components from Bootstrap doesn't include any style/theme

## Browser Support

_CSS Basics_ is compiled with default [`browserlist`](https://github.com/ai/browserslist) configurations:<br />
`> 1%, last 2 versions, Firefox ESR, Opera 12.1`

* IE >= 9<br/>
  IE < 9 doesn't support this requirements:
  * Media Queries<br/>
    Affects: All responsive utilities<br/>
    Solution: Include [respond.js](https://github.com/scottjehl/Respond)
  * 2D Transform<br/>
    Affects: Positioning<br/>
    Solution: Include [positions.ie.css](/build/positions.ie.css) - Requires to set width/height
* Chrome, Firefox, Safari and all other major browsers
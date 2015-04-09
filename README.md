# [CSS Basics](http://cheich.github.io/CSS-Basics/)

You're the web artist. So... why should a CSS framework restrict your artistry?

CSS Basics is built to start styling your page without worry about any position and behaviour problems. It's mobile first and scales up to large displays with Twitters incredible Bootstrap [grid system](http://getbootstrap.com/css/#grid) and [responsive utilities](http://getbootstrap.com/css/#responsive-utilities).

## Features
* No styles - just basics
* Responsive and adaptive
* Mobile first
* RTL support
* Easy implementation - just a few classes
* Lightweight - only ~21 KB (minimized version)

## Setup
Just include **basics.min.css** before all other stylesheets and javascripts.

## Include
* Menus
  * Horizontal
  * Vertical
* Forms
* Tables
* Helpers
* Positioning
* Externals
  * [Normalize.css](https://necolas.github.io/normalize.css/)
  * Twitters Bootstrap [grid system](http://getbootstrap.com/css/#grid) and [responsive utilities](http://getbootstrap.com/css/#responsive-utilities)
  * WordPress core (modified) - Of course you can use it outside of WordPress

## Browser Support

* IE >= 9 - IE < 9 doesn't support these requirements:
  * Media Queries
    Affects: All responsive utilities
    Solution: Include [respond.js](https://github.com/scottjehl/Respond)
  * 2D Transform
    Affects Positioning
    Solution: Include [basics.ie.css](/src/bascics.ie.css) - Requires to set width/height
* Chrome, Firefox, Safari and all other major browsers
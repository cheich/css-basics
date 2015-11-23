# History

## v4.0.0-alpha17
 * New main color and logo (yay!)
 * Added `theme.scss` to build your theme - Here are some selectors to easily start styling
 * Added _Layouts_
 * Moved from Less to Sass
 * More options; Overwrite variables that come from `_variables.scss`
 * Improved _Orientations_ - now there are gutters between the columns
 * Improved _Menus_
 * Improved _Forms_ - all elements have the same height by default; buttons now have a basic look with system colors
 * Improved _Typography_ - more resets and basic spacings; clearer class-names
 * Updated Bootstrap components to v4.0 (still in alpha - we will stay meanwhile in alpha too)
 * Added `-xl` keyword for extra large devices
 * Dropped support for IE<9 and FF<19 (use v3 if you have to support these browsers)
 * Added more Mixins
 * Better documentation; includes now the basics of vendor components
 * Many core optimizations and bug fixes
 * Update notices:
   * Class `.caption` renamed to `.figure-caption` (causing collision with table's `<caption>`)
   * Some text helpers are renamed (now all have a `text-` prefix)
   * Visibilities completely renamed and replaced with bootstraps components

## v3.0.1
 * Fixed sub-menus z-index
 * Fixed compiled version (options were included)

## v3.0.0
 * Removed new print classes (it's included in bootstraps responsive utilities - my bad xD)
 * New file structure (to not repeat mixins)
 * WordPress is not included by default (use the custom compiled versions or compile your own version instead)
 * Removed keyword `!important` in the base reset to `box-sizing: border-box;`, it's no longer necessary

## v3.0.0b2
 * Image styles separated 
 * New helpers
   * Alignments (align block-level elements left, right or center)
   * Text wrap
 * `<figure>` and `<figcaption>` can be used instead of caption classes; captions are redesigned entirely
 * __Update notice:__ Some helper classes renamed
   * WordPress generated classes are not very meaningful:<br />
     `.alignright` renamed to `.float-right` (same with `...left` and `...none`)<br />
     `.alignright` and the others will now be included with the WordPress component<br />
     `.aligncenter` renamed to `.align-center` (naming convention; further see new _alignments_ helpers)
   * Image caption classes renamed: `.caption` to `.figure` and `.caption-text` to `.caption` (naming convention; just like `<figure>` and `<figcaption>`)
   * Text alignments helper classes renamed: `.right` to `.text-align-right`, `.center` to `.text-align-center` etc.
 * Removed style `font-size: smaller;` on caption text
 * Removed table style

## v3.0.0b1
 * Source files with [{less}](http://lesscss.org/)
 * Added less-variables and mixins
 * All features separated in components
 * Added more vendor components
 * Despite all the new features 1 KB smaller than v2.1.x
 
## v2.1.6
 * Removed padding on image caption-text
 
## v2.0.0
 * First official release
 
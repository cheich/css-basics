# History

## v4.0.0

### Added

- New main color and logo (yay!)
- Added `theme.scss` to build your theme - Here are some selectors to easily start styling
- Added _Layouts_
- Added _Groups_
- Added `-xl` keyword for extra large devices
- Added more mixins
- More options; Overwrite variables that come from `_variables.scss`

### Changed

- Moved from Less to Sass
- Replaced _Orientations_ with _Groups_ - mobile first means everything is vertical
- All resets are now in one file called `_resets.scss`
- Most styles replaced with mixins
- New documentation powered with Markdown and Sassdoc
- Hidden submenus are now visible for screen-readers
- Split helpers into separated components

### Updated

- Updated Bootstrap components to v4.0.0-alpha.2
- Updated Normalize to v4.1.1

### Update notices

- Dropped figure classes - use HTML5 tags instead
- Some text helpers are renamed (now all text helpers are prefixed with `text-`)
- Visibilities completely renamed and replaced with bootstraps components
- Dropped support for IE<9 and FF<19 (use v3 if you have to support these browsers)
- _Orientation_ classes are dropped completely in favor for _Groups_
- `.label-text-inline` dropped, use groups instead

## v3.0.1

- Fixed sub-menus z-index
- Fixed compiled version (options were included)

## v3.0.0

- Removed new print classes (it's included in bootstraps responsive utilities - my bad xD)
- New file structure (to not repeat mixins)
- WordPress is not included by default (use the custom compiled versions or compile your own version instead)
- Removed keyword `!important` in the base reset to `box-sizing: border-box;`, it's no longer necessary

## v3.0.0b2

- Image styles separated
- New helpers
  - Alignments (align block-level elements left, right or center)
  - Text wrap
- `<figure>` and `<figcaption>` can be used instead of caption classes; captions are redesigned entirely
- Removed style `font-size: smaller;` on caption text
- Removed table style

### Update notice

Some helper classes are renamed:

- WordPress generated classes are not very meaningful:

  `.alignright` renamed to `.float-right` (same with `...left` and `...none`)

  `.alignright` and the others will now be included with the WordPress component

  `.aligncenter` renamed to `.align-center` (naming convention; further see new _alignments_ helpers)

- Image caption classes renamed: `.caption` to `.figure` and `.caption-text` to `.caption` (naming convention; just like `<figure>` and `<figcaption>`)
- Text alignments helper classes renamed: `.right` to `.text-align-right`, `.center` to `.text-align-center` etc.

## v3.0.0b1

- Source files with [{less}](http://lesscss.org/)
- Added less-variables and mixins
- All features separated in components
- Added more vendor components
- Despite all the new features 1 KB smaller than v2.1.x

## v2.1.6

- Removed padding on image caption-text

## v2.0.0

- First official release

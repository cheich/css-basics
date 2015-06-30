# History

## 3.0.0
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
 * *Update notice:* Some helper classes renamed
   * WordPress generated classes are not very meaningful:<br />
     `.alignright` renamed to `.float-right` (same with `...left` and `...none`)<br />
     `.alignright` and the others will now be included with the WordPress component<br />
     `.aligncenter` renamed to `.align-center` (name convention; further see new _alignments_ helpers)
   * Image caption classes renamed: `.caption` to `.figure` and `.caption-text` to `.caption` (name convention; just like `<figure>` and `<figcaption>`)
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
 
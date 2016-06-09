# [CSS Basics](http://christoph-heich.de/css-basics)

The CSS framework that won't restrict your artistry.

If you have suggestions of improvements or bug reports, please feel free to
create a new issue via the [issue tracker](/issues) or open a new
[pull request](/pull/new/master).

Take a look at the _project page [coming soon]_ to see the complete documentation.

## To-do

- [ ] Update Bootstraps components (waiting for Bootstrap 4 release)
- [ ] Add pre-compiled rtl-versions
- [ ] Update documentation

## Features

- No styles included - or maybe a few as opinionated reset 😁
- Include only components that you need - compiled with [Sass](http://sass-lang.com/)
- Responsive and adaptive - mobile first
- RTL support out of the box as separated CSS file
- Easy implementation - just a few classes
- Powered and inspirited by [Twitters Bootstrap](http://getbootstrap.com/)
- Very lightweight

## Install

- Bower: `bower install css-basics`
- npm: `npm install css-basics`
- [Download latest release](/archive/master.zip)

## Setup

Just include [basics.min.css](/dist/basics.min.css) before all other stylesheets. Your
template should have at least this markup:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="path/to/basics.min.css" />
    <!-- more stylesheets -->
  </head>
  <body>
    ...
  </body>
</html>
```

## Custom build

Check out the [custom dist](/dist/custom) for new pre-compiled version or take
a look at the _setup documentation [link coming soon]_ to build your own dist.

## Browser Support

All major browsers like Chrome, Firefox and Safari are supported.

Since v4.0, IE<10 and FF<19 support is dropped. If you want to support these browsers
you can still use the old version 3.x.

IE9 doesn't support Flexbox - I'm looking for workarounds or a pollyfill.

## Release notes

Each main version is mostly backward-compatible. See the [history](HISTORY.md) to
see all changes and fixes.

## License

Released under the [MIT license](LICENSE)

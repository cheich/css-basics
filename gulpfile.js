//
// CSS Basics gulpfile
//

'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sass = require('gulp-sass');
var clone = require('gulp-clone');
var merge = require('merge-stream');
var postcss = require('gulp-postcss');
var minify = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var sassdoc = require('sassdoc');
var cp = require('child_process');
var fs = require('fs-extra');
var flexibility = require('postcss-flexibility'); // testing

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

var browserlist = ['> 1%', 'last 2 versions', 'Firefox ESR'];

var sassOptions = {
  outputStyle: 'expanded',
  sourceComments: false
};

var pkg = require('./package.json');
pkg.year = String(new Date().getFullYear());

var banner = '/*!\n' +
             ' * <%= pkg.title %> v<%= pkg.version %> <<%= pkg.homepage %>>\n' +
             ' * Copyright 2014-<%= pkg.year %> <%= pkg.author.name %> <<%= pkg.author.url %>>\n' +
             ' * Released under the <%= pkg.license %> license <https://github.com/cheich/css-basics/blob/master/LICENSE>\n' +
             ' */\n';

var srcPath = {
  custom:  ['scss/basics-*.scss', '!scss/basics-rtl.scss'],
  default: ['scss/basics.scss', 'scss/basics-rtl.scss'],
  sassdoc: './scss/basics/**/*.scss',
  docs:    './docs'
};

//
// Compile the CSS Basics framework
//
gulp.task('default', function() {
  var stream = gulp.src(srcPath.default)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', function(error) {
      throw(error.message);
    }))
    .pipe(postcss([
      flexibility,
      autoprefixer({ browsers: browserlist })
    ]))
    .pipe(header(banner, { pkg: pkg }));

  var main = stream.pipe(clone())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));

  var min = stream.pipe(clone())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'));

  return merge(main, min);
});

//
// Compile a custom build of the CSS Basics framework
//
gulp.task('custom', function() {
  var cpkg = pkg;
  cpkg.version = pkg.version + ' CUSTOM BUILD';

  var stream = gulp.src(srcPath.custom)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', function(error) {
      throw(error.message);
    }))
    .pipe(postcss([
      flexibility,
      autoprefixer({ browsers: browserlist })
    ]))
    .pipe(header(banner, { pkg: cpkg }));

  var main = stream.pipe(clone())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));

  var min = stream.pipe(clone())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'));

  return merge(main, min);
});

//
// Build documentation
//
gulp.task('docs', ['sassdoc'], function (done) {
  fs.copy('./scss/basics', './docs/_sass/.basics-tmp', function (err) {
    if (err) {
      console.error(err);
    }
  });

  return cp.spawn(jekyll, ['build'], {
      stdio: 'inherit',
      cwd: srcPath.docs
    })
    .on('close', done);
});

//
// Sass documentation
//
gulp.task('sassdoc', function() {
  return gulp.src(srcPath.sassdoc)
    .pipe(sassdoc({
      dest: 'docs/sassdoc'
    }));
});

//
// Watch all changes
//
gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss'], ['default', 'custom']);
  gulp.watch(['**/*.html', '**/*.md', '!README.md', '_sass/_theme.scss', 'assets/**/*'], ['doc']);
  gulp.watch(['_sass/basics/**/*.scss'], ['sassdoc']);
});

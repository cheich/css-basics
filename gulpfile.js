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
var flexibility = require('postcss-flexibility'); // testing
var sassdoc = require('sassdoc');
var cp = require('child_process'); // native

var pkg = require('./package.json');
pkg.year = String(new Date().getFullYear());

var browserlist = ['> 1%', 'last 2 versions', 'Firefox ESR'];

var sassOptions = {
  outputStyle: 'expanded',
  sourceComments: false
};

var banner = '/*!\n' +
             ' * <%= pkg.title %> v<%= pkg.version %> <<%= pkg.homepage %>>\n' +
             ' * Copyright 2014-<%= pkg.year %> <%= pkg.author.name %> <<%= pkg.author.url %>>\n' +
             ' * Released under the <%= pkg.license %> license <https://github.com/cheich/CSS-Basics/blob/master/LICENSE>\n' +
             ' */\n';

var themeBanner = '/*!\n' +
                  ' * Theme build on CSS Basics v<%= pkg.version %>\n' +
                  ' */\n';

//
// Default task
//
gulp.task('default', ['basics', 'custom']);

//
// Compile CSS Basics framework
//
gulp.task('basics', function() {
  var stream = gulp.src('scss/basics.scss')
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

  var stream = gulp.src('scss/basics-*.scss')
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
// Compile documentation theme
//
gulp.task('doc-style', function() {
  var stream = gulp.src('docs/assets/_scss/**/*.scss')
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
    .pipe(sourcemaps.write('./', {
      sourceRoot: './'
    }))
    .pipe(gulp.dest('./docs/assets/css'));

  var min = stream.pipe(clone())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest('./docs/assets/css'));

  return merge(main, min);
});

//
// Sass documentation
//
gulp.task('sassdoc', function() {
  return gulp.src('./scss/basics/**/*.scss')
    .pipe(sassdoc({
      dest: 'docs/_site/sassdoc'
    }));
});

//
// Build HTML documentation
//
gulp.task('doc', ['doc-style'], function() {
  return cp.spawn('jekyll.bat', ['build'], {
    stdio: 'inherit',
    cwd: 'docs'
  });
});

//
// Watch all changes
//
gulp.task('watch', function() {
  gulp.watch('scss/basics-*.scss', ['custom']);
  gulp.watch(['scss/basics.scss', 'scss/basics/**/*.scss'], ['basics']);
  cp.spawn('jekyll.bat', ['build', '--watch'], {
    stdio: 'inherit',
    cwd: 'docs'
  });
});

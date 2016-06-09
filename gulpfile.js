//
// CSS Basics gulpfile
//

'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var ignore = require('gulp-ignore');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var minify = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');

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
gulp.task('default', ['basics', 'theme', 'custom']);

//
// Compile CSS Basics framework
//
gulp.task('basics', function() {
  return gulp.src('scss/basics.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', function(error) {
      throw(error.message);
    }))
    .pipe(postcss([
      flexibility,
      autoprefixer({ browsers: browserlist })
    ]))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .pipe(ignore.exclude('*.map'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
});

//
// Compile a custom build of the CSS Basics framework
//
gulp.task('custom', function() {
  var cpkg = pkg;
  cpkg.version = pkg.version + ' CUSTOM BUILD';

  return gulp.src('scss/basics-*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', function(error) {
      throw(error.message);
    }))
    .pipe(postcss([
      flexibility,
      autoprefixer({ browsers: browserlist })
    ]))
    .pipe(header(banner, { pkg: cpkg }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/custom'))
    .pipe(ignore.exclude('*.map'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist/custom'));
});

//
// Compile Theme
//
gulp.task('theme', function() {
  return gulp.src('scss/theme.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', function(error) {
      throw(error.message);
    }))
    .pipe(postcss([
      flexibility,
      autoprefixer({ browsers: browserlist })
    ]))
    .pipe(header(themeBanner, { pkg: pkg }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .pipe(ignore.exclude('*.map'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
});

//
// Watch all changes
//
gulp.task('watch', function() {
  gulp.watch('scss/basics-*.scss', ['custom']);
  gulp.watch(['scss/basics.scss', 'scss/basics/**/*.scss'], ['basics']);
  gulp.watch('scss/theme.scss', ['theme']);
});

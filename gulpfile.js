/*!
 * CSS Basics gulpfile v1.1.0
 */
 
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var pkg = require('./package.json');
pkg.year = String(new Date().getFullYear());

var browserlist = ['> 1%', 'last 2 versions', 'Firefox ESR'];
var sassIncludePaths = 'scss/basics/components';

var banner = '/*!\n' + 
             ' * <%= pkg.title %> v<%= pkg.version %> <<%= pkg.homepage %>>\n' + 
             ' * Copyright 2014-<%= pkg.year %> <%= pkg.author.name %> <<%= pkg.author.url %>>\n' + 
             ' * Released under the <%= pkg.license %> license <https://github.com/cheich/CSS-Basics/blob/master/LICENSE>\n' + 
             ' */\n';

var themeBanner = '/*!\n' + 
                  ' * Theme - build on CSS Basics v<%= pkg.version %>>\n' + 
                  ' */';

/**
 * Default task
 */
gulp.task('default', function() {
    gulp.start('basics');
    gulp.start('theme');
});

/**
 * Compile CSS Basics framework
 *
 * Options:
 *   --custom: Safe as custom build. Optional with keyword.
 */
gulp.task('basics', function() {
    var renameOptions = {};

    // Check for custom build
    var customIndex = process.argv.indexOf('--custom');
    if (customIndex > -1) {
        renameOptions.dirname = 'custom';
        if ((customIndex + 1) in process.argv) {
            renameOptions.suffix = '-' + process.argv[customIndex + 1].toLowerCase();
        }else{
            renameOptions.suffix = '-custom';
        }
    }
    
    return gulp.src('scss/basics.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(browserlist))
        .pipe(minify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename(renameOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

/**
 * Compile Theme
 */
gulp.task('theme', function() {
    return gulp.src('scss/theme.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(browserlist))   
        .pipe(minify())
        .pipe(header(themeBanner, { pkg: pkg }))    
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

/**
 * Watch all changes
 */
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['default']);
    gulp.watch('scss/theme.scss', ['theme']);
});

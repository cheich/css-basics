/*!
 * CSS Basics gulpfile v1.0.0
 */
 
'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var rename = require('gulp-rename');
var header = require('gulp-header');

var date = new Date();
var pkg = require('./package.json');

/**
 * Banners
 */
 
var banner = '/*!\n' + 
             ' * CSS Basics v<%= pkg.version %> <<%= pkg.homepage %>\n' + 
             ' * Copyright 2014-' + date.getFullYear() + ' <%= pkg.author.name %> <<%= pkg.author.url %>>\n' + 
             ' * Released under the <%= pkg.license %> license <https://github.com/cheich/CSS-Basics/blob/master/LICENSE>\n' + 
             ' */\n';

var customBanner = '/*!\n' + 
                   ' * CSS Basics Custom v<%= pkg.version %> <<%= pkg.homepage %>\n' + 
                   ' * Copyright 2014-' + date.getFullYear() + ' <%= pkg.author.name %> <<%= pkg.author.url %>>\n' + 
                   ' * Released under the <%= pkg.license %> license <https://github.com/cheich/CSS-Basics/blob/master/LICENSE>\n' + 
                   ' */\n';

var themeBanner = '/*!\n' + 
                  ' * Theme - build on CSS Basics v<%= pkg.version %>\n' + 
                  ' */';

/**
 * Compile all files from gulpSrc
 *
 * Includes prefixing, minifying and source-maps.
 * Will NOT generate any files.
 * 
 * @param gulpSrc Files to compile
 * @return gulp
 */
var compile = function(gulpSrc) {
    return gulpSrc
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                'scss/basics/components',
            ],
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(minify());
};

/**
 * Default task
 */
gulp.task('default', function() {
    compile(gulp.src('scss/basics.scss'))
        .pipe(sourcemaps.write('./'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
    compile(gulp.src('scss/theme.scss'))
        .pipe(sourcemaps.write('./'))
        .pipe(header(themeBanner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

/**
 * Watching
 */
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['default']);
});


/**
 * Custom dist
 * 
 * Add keywords via `--keyword keywordGoesHere`
 */
gulp.task('custom', function() {
    // Get keyword
    var keyword = process.argv.indexOf('--keyword');    
    if (keyword > -1)
        keyword = process.argv[keyword + 1];    
    if (keyword == -1 || typeof keyword === 'undefined')
        keyword = 'custom';

    // Compile
    compile(gulp.src('scss/basics.scss'))
        .pipe(rename({
            suffix: '-' + keyword.toLowerCase(),
            dirname: 'custom',
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(header(customBanner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  camelize: true
});
var browserSync = require('browser-sync');
var del = require('del');
var reload = browserSync.reload;
var runSequence = require('run-sequence');

// Run clean tasks
require('./gulp/clean')(gulp, del);

// Run tasks on Gulp
require('./gulp/gulp')(gulp, plugins);

// Run tasks on HTML
require('./gulp/html')(gulp, plugins);

// Run tasks on JavaScript
require('./gulp/javascript')(gulp, plugins);

// Run tasks on SCSS
require('./gulp/scss')(gulp, plugins);

// Run tasks on images
require('./gulp/images')(gulp, plugins);

// Run default tasks
require('./gulp/default')(gulp, runSequence);

// Run tasks on watch using Browser Sync
require('./gulp/serve')(gulp, browserSync, reload);

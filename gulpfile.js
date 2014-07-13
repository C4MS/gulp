var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  camelize: true
});
var browserSync = require('browser-sync');
var del = require('del');
var reload = browserSync.reload;
var runSequence = require('run-sequence');

// Run clean tasks
require('./tasks/clean')(gulp, del);

// Run tasks on Gulp
require('./tasks/gulp')(gulp, plugins);

// Run tasks on HTML
require('./tasks/html')(gulp, plugins);

// Run tasks on JavaScript
require('./tasks/javascript')(gulp, plugins);

// Run tasks on SCSS
require('./tasks/scss')(gulp, plugins);

// Run tasks on images
require('./tasks/images')(gulp, plugins);

// Run default tasks
require('./tasks/default')(gulp, runSequence);

// Run tasks on watch using Browser Sync
require('./tasks/serve')(gulp, browserSync, reload);

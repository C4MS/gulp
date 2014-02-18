var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var tinylr = require('tiny-lr');
var server = tinylr();

// Run default tasks
require('./tasks/default')(gulp);

// Run tasks on watch
require('./tasks/watch')(gulp, plugins, server);

// Run clean tasks
require('./tasks/clean')(gulp, plugins);

// Run tasks on Gulp
require('./tasks/gulp')(gulp, plugins);

// Run tasks on HTML
require('./tasks/html')(gulp, plugins, server);

// Run tasks on JavaScript
require('./tasks/javascript')(gulp, plugins, server);

// Run tasks on SCSS
require('./tasks/scss')(gulp, plugins, server);

// Run tasks on images
require('./tasks/images')(gulp, plugins, server);

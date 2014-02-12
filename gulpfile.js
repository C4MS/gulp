var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var tinylr = require('tiny-lr');
var server = tinylr();

// Run default tasks
var TaskDefault = new require('./tasks/default')(gulp);

// Run tasks on watch
var TaskWatch = require('./tasks/watch')(gulp, plugins, server);

// Run clean tasks
var TaskClean = require('./tasks/clean')(gulp, plugins);

// Run tasks on Gulp
var TaskGulp = require('./tasks/gulp')(gulp, plugins);

// Run tasks on HTML
var TaskHtml = require('./tasks/html')(gulp, plugins, server);

// Run tasks on JavaScript
var TaskJavaScript = require('./tasks/javascript')(gulp, plugins, server);

// Run tasks on SCSS
var TaskScss = require('./tasks/scss')(gulp, plugins, server);

// Run tasks on images
var TaskImages = require('./tasks/images')(gulp, plugins, server);

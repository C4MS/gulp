var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var tinylr = require('tiny-lr');
var server = tinylr();

// Run default tasks
var TaskDefault = require('./tasks/default');
var taskDefault = new TaskDefault(gulp);

// Run tasks on watch
var TaskWatch = require('./tasks/watch');
var taskWatch = new TaskWatch(gulp, plugins, server);

// Run clean tasks
var TaskClean = require('./tasks/clean');
var taskClean = new TaskClean(gulp, plugins);

// Run tasks on Gulp
var TaskGulp = require('./tasks/gulp');
var taskGulp = new TaskGulp(gulp, plugins);

// Run tasks on JavaScript
var TaskJavaScript = require('./tasks/javascript');
var taskJavaScript = new TaskJavaScript(gulp, plugins, server);

// Run tasks on SCSS
var TaskScss = require('./tasks/scss');
var taskScss = new TaskScss(gulp, plugins, server);

// Run tasks on images
var TaskImages = require('./tasks/images');
var taskImages = new TaskImages(gulp, plugins, server);

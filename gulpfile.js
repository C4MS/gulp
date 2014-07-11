var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  camelize: true
});

// Run default tasks
require('./tasks/default')(gulp);

// Run tasks on watch
require('./tasks/watch')(gulp, plugins);

// Run clean tasks
require('./tasks/clean')(gulp, plugins);

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

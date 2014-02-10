module.exports = function TaskDefault(gulp) {
  'use strict';

  gulp.task('default', [
    'scripts',
    'scss',
    'images'
  ]);
};

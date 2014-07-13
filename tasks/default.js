module.exports = function TaskDefault(gulp, runSequence) {
  'use strict';

  gulp.task('default', ['clean'], function() {
    runSequence('javascript', 'scss', 'images');
  });
};

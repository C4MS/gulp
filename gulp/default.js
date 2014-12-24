module.exports = function TaskDefault(gulp) {
  'use strict';

  gulp.task('default', ['clean'], function() {
    gulp.start('scripts', 'scss', 'images');
  });
};

module.exports = function TaskClean(gulp, plugins) {
  'use strict';

  gulp.task('clean', function() {

    return gulp.src([
      'assets/dist/js/',
      'assets/dist/css/',
      'assets/dist/images/',
    ],{
      read: false
    })
    .pipe(plugins.clean());
  });
};

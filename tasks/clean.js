module.exports = function TaskClean(gulp, del) {
  'use strict';

  gulp.task('clean', del.bind(null, ['assets/dist/*']));
};

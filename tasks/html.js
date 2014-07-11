module.exports = function TaskHtml(gulp, plugins) {
  'use strict';

  gulp.task('html', function() {

    return gulp.src([
        '**/*.html',
        '!external/**',
        '!node_modules/**'
      ]);
  });
};

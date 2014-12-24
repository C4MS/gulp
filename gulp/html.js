module.exports = function TaskHtml(gulp, plugins) {
  'use strict';

  gulp.task('html', function() {

    return gulp.src([
        './src/views/**/*.html'
      ])
      .pipe(plugins.include())
      .pipe(plugins.minifyHtml())
      .pipe(gulp.dest('./dist/views/'));
  });
};

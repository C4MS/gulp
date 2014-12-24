module.exports = function TaskGulp(gulp, plugins) {
  'use strict';

  gulp.task('gulp', function() {

    return gulp.src([
        './gulp/**/*.js'
      ])
      .pipe(plugins.jshint('.jshintrc'))
      .pipe(plugins.jshint.reporter('jshint-stylish'));
  });
};

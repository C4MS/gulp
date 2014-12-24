module.exports = function TaskJavaScript(gulp, plugins) {
  'use strict';

  gulp.task('javascript', function() {

    return gulp.src([
        './src/js/**/*.js'
      ])
      .pipe(plugins.jshint('.jshintrc'))
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.include())
      .pipe(plugins.uglify())
      .pipe(plugins.rename(function(path) {
        path.extname = '.min.js';
      }))
      .pipe(gulp.dest('./dist/js/'));
  });
};

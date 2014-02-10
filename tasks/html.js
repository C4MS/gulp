module.exports = function TaskHtml(gulp, plugins, server) {
  'use strict';

  gulp.task('html', function() {

    return gulp.src([
        './**/*.html',
        '!external/',
        '!node_modules/',])
      .pipe(plugins.livereload(server));
  });
};

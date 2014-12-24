module.exports = function TaskJavaScript(gulp, plugins, server) {
  'use strict';

  gulp.task('scripts', function() {

    return gulp.src([
        'assets/src/js/**/*.js'
      ])
      .pipe(plugins.jshint('.jshintrc'))
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.concat('script.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.rename(function(dir, base, ext) {
        return base + '.min' + ext;
      }))
      .pipe(gulp.dest('assets/dist/js'))
      .pipe(plugins.livereload(server));
  });
};

module.exports = function TaskScss(gulp, plugins, server) {
  'use strict';

  gulp.task('scss', function() {

    return gulp.src([
        'assets/src/scss/style.scss'
      ])
      .pipe(plugins.rubySass())
      .pipe(plugins.autoprefixer())
      .pipe(plugins.rename(function(dir, base, ext) {
        return base + '.min' + ext;
      }))
      .pipe(plugins.csso())
      .pipe(gulp.dest('assets/dist/css'))
      .pipe(plugins.livereload(server));
  });
};

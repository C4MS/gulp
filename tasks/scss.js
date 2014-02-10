module.exports = function TaskScss(gulp, plugins, server) {
  'use strict';

  gulp.task('scss', function() {

    return gulp.src([
        'assets/src/scss/**/*.scss'
      ])
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer())
      .pipe(plugins.rename(function(dir, base, ext) {
        return base + '.min' + ext;
      }))
      .pipe(plugins.csso())
      .pipe(gulp.dest('assets/dist/css'))
      .pipe(plugins.livereload(server));
  });
};

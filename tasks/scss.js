module.exports = function TaskScss(gulp, plugins, server) {
  'use strict';

  gulp.task('scss', function() {

    return gulp.src([
        'assets/src/scss/style.scss'
      ])
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer())
      .pipe(plugins.cssmin())
      .pipe(plugins.rename(function(path) {
        path.extname = '.min.css';
      }))
      .pipe(gulp.dest('assets/dist/css'))
      .pipe(plugins.livereload(server));
  });
};

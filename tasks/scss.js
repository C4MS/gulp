module.exports = function TaskScss(gulp, plugins) {
  'use strict';

  gulp.task('scss', function() {

    return gulp.src([
        './src/scss/**/*.scss'
      ])
      .pipe(plugins.include())
      .pipe(plugins.sass())
      .pipe(plugins.csslint('.csslintrc'))
      .pipe(plugins.csslint.reporter())
      .pipe(plugins.autoprefixer())
      .pipe(plugins.cssmin())
      .pipe(plugins.rename(function(path) {
        path.extname = '.min.css';
      }))
      .pipe(gulp.dest('./dist/css/'));
  });
};

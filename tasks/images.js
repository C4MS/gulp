module.exports = function TaskImages(gulp, plugins, server) {
  'use strict';

  gulp.task('images', function() {

    return gulp.src('./assets/src/img/**')
      .pipe(plugins.imagemin())
      .pipe(gulp.dest('./assets/dist/img'))
      .pipe(plugins.livereload(server));
  });
};

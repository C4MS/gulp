module.exports = function TaskImages(gulp, plugins) {
  'use strict';

  gulp.task('images', function() {

    return gulp.src('assets/src/images/**')
      .pipe(plugins.cache(plugins.imagemin({
          optimizationLevel: 3,
          pngquant: true,
          progressive: true,
          interlaced: true
      })))
      .pipe(gulp.dest('assets/dist/images'));
  });
};

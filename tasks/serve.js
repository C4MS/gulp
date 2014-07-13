module.exports = function TaskClean(gulp, browserSync, reload) {
  'use strict';

  gulp.task('serve', function () {
    browserSync({
      notify: false,
      server: {
        baseDir: ['./']
      }
    });


    // Watch HTML
    gulp.watch(['**/*.html'], reload);

    // Watch SCSS
    gulp.watch(['assets/src/scss/**/*.scss'], ['scss', reload]);

    // Watch JavaScript
    gulp.watch(['assets/src/js/**/*.js'], ['javascript', reload]);

    // Watch images
    gulp.watch(['assets/src/img/**/*'], ['images', reload]);
  });
};

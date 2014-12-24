module.exports = function TaskClean(gulp, browserSync, reload) {
  'use strict';

  gulp.task('serve', function () {
    browserSync({
      notify: false,
      proxy: 'localhost:80'
    });


    // Watch HTML
    gulp.watch(['./src/views/**/*.html'], ['html', reload]);

    // Watch SCSS
    gulp.watch(['./src/scss/**/*.scss'], ['scss', reload]);

    // Watch JavaScript
    gulp.watch(['./src/js/**/*.js'], ['javascript', reload]);

    // Watch images
    gulp.watch(['./src/img/**/*.*'], ['images', reload]);
  });
};

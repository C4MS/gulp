module.exports = function TaskWatch(gulp, plugins, server) {
  'use strict';

  gulp.task('watch', function () {

    // LiveReload Server
    server.listen(35729, function(error) {
      if(error) {
        console.log(error);
      }

      // Watch Gulp
      gulp.watch(['gulp/**/*.js'], ['gulp']);

      // Watch HTML
      gulp.watch([
          '**/*.html',
          '!external/**',
          '!node_modules/**'
        ], ['html']);

      // Watch SCSS
      gulp.watch(['assets/src/scss/**'], ['scss']);

      // Watch JavaScript
      gulp.watch(['assets/src/js/**'], ['scripts']);

      // Watch images
      gulp.watch(['assets/src/img/**'], ['images']);
    });
  });
};
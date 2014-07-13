module.exports = function TaskJavaScript(gulp, plugins) {
  'use strict';

  gulp.task('javascript', function() {

    return gulp.src([
        'assets/external/angular/angular.min.js',
        'assets/external/angular-route/angular-route.min.js',
        'assets/src/js/modules/**/*.js',
        'assets/src/js/directives/**/*.js',
        'assets/src/js/filters/**/*.js',
        'assets/src/js/services/**/*.js',
        'assets/src/js/factories/**/*.js',
        'assets/src/js/controllers/**/*.js',
      ])
      .pipe(plugins.jshint('.jshintrc'))
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.concat('script.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.rename(function(path) {
        path.extname = '.min.js';
      }))
      .pipe(gulp.dest('assets/dist/js'));
  });
};

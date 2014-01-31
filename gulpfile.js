var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// Run tasks on SCSS
gulp.task('scss', function() {
  return gulp.src([
      './assets/src/scss/**/*.scss'
    ])
    .pipe(plugins.compass({
      css: './assets/dist/css/',
      sass: './assets/src/scss/',
      image: './assets/src/images/',
      sprite: './assets/dist/images/'
    }))
    .pipe(plugins.rename(function(dir, base, ext) {
      return base + '.min' + ext;
    }))
    .pipe(plugins.csso())
    .pipe(gulp.dest('./assets/dist/css'))
});

// Run tasks on JavaScript
gulp.task('scripts', function() {
  return gulp.src([
      './assets/src/js/**/*.js'
    ])
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./assets/dist/js'));
});

// Run tasks on images
gulp.task('images', function() {
 return gulp.src('./assets/src/img/**')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('./assets/dist/img'));
});

gulp.task('watch', function () {
  // Watch SCSS
  gulp.watch('./assets/src/scss/**', [
    'scss'
  ]);

  // Watch JavaScript
  gulp.watch('./assets/src/js/**', [
    'scripts'
  ]);

  // Watch images
  gulp.watch('./assets/src/img/**', [
    'images'
  ]);
});

gulp.task('default', ['scripts', 'scss', 'images']);

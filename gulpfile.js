const gulp = require('gulp');
const purify = require('gulp-purifycss');

gulp.task('purifyCSS', () => gulp.src('./dist/browser/styles.*.css')
  .pipe(purify(['./src/app/**/*.ts', './src/app/**/*.html'], {
    info: true,
    minify: true,
    rejected: false,
    whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
  }))
  .pipe(gulp.dest('./dist/browser')));
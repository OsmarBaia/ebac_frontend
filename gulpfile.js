const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  less: './src/less/**/*.less',
  css: './dist/css/',
};

function compileLess() {
  return gulp
    .src(paths.less)
    .pipe(sourcemaps.init()) 
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css))
}

function watchFiles() {
  gulp.watch(paths.less, compileLess);
}

exports.default = gulp.series(compileLess, gulp.parallel(watchFiles));
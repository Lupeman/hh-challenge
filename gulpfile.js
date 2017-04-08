var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

const sassPath = './app/scss/**/*.scss';
const jsPath = './app/javascript/**/*.js';



gulp.task('sass', function(){
  return gulp.src(sassPath)
  .pipe(sass())
  .pipe(gulp.dest('./app/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('javascript', function(){
  browserSync.reload({
    // stream: true
  });
});


gulp.task('watch', ['sync', 'sass', 'javascript'], function(){
  gulp.watch(sassPath, ['sass']);
  gulp.watch(jsPath, ['javascript'])
});

gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

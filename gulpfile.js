var gulp = require('gulp'),
    sass = require('gulp-sass'),
    mocha = require('gulp-mocha');

gulp.task('mocha', function(){
  return gulp.src('test/*.js', {read: false})
      .pipe(mocha({reporter: 'spec'}));
});

gulp.task('jquery', function(){
  return gulp.src('node_modules/jquery/dist/jquery.js')
      .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function(){
  return gulp.src('public/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css'));
});

gulp.task('font-awesome', function(){
  var css = gulp.src('node_modules/font-awesome/css/font-awesome.css')
      .pipe(gulp.dest('public/css')),
      fonts = gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('public/fonts'));
  return [css,fonts];
});

gulp.task('bootstrap', function(){
  var css = gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
      .pipe(gulp.dest('public/css')),
      js = gulp.src('node_modules/bootstrap/dist/js/bootstrap.js')
      .pipe(gulp.dest('public/js')),
      fonts = gulp.src('node_modules/bootstrap/dist/fonts/*')
      .pipe(gulp.dest('public/fonts'));
  return [css,js,fonts];
});

gulp.task('watch',function() {
  gulp.watch('public/sass/*.scss',['sass']);
  gulp.watch('test/*.js', ['mocha']);
});

gulp.task('default', ['jquery', 'sass', 'font-awesome', 'bootstrap']);

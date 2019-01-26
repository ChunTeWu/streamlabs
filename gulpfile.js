const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');

// less compiler 
gulp.task('less', function () {
  return gulp.src('dev/less/styles.less')
	.pipe(less())
	.pipe(gulp.dest('dev/styles'))
	.pipe(browserSync.stream());
});

// watch
gulp.task('watch', function(){
	gulp.watch('dev/less/*.less', ['less']);
	gulp.watch('dev/*.html', browserSync.reload);
	gulp.watch('dev/styles/*.css', browserSync.reload);
	gulp.watch('dev/scripts/*.js', browserSync.reload);
});

// browser sync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "dev"
        }
	});

});

// Default Task
gulp.task('default', function() {
	runSequence(['less','browserSync'], 'watch');
  });

// build
gulp.task('build', function () {
    return gulp.src('dev/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});
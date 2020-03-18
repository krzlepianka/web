const gulp = require('gulp');
const sass= require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
})
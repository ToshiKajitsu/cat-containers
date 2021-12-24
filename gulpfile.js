const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('autoPrefixCSS', function() {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 20 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest('css/'));
});
const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// compile scss into css
function style() {
    return gulp.src('./src/assets/scss/**/*scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
}

// compile scss into js
function scripts() {
    return gulp.src('./src/assets/js/**/*js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/assets/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/assets/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.scripts = scripts;
exports.watch = watch;

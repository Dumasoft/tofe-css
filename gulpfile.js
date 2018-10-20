var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat-css');
var limpiarcss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var origen = 'sass/tofe.sass';
var destino = 'dist/css';

gulp.task('sass', function() {
    gulp.src(origen)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destino))
});

gulp.task('sass-minified', function() {
    gulp.src(origen)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('tofe.min.css'))
        .pipe(limpiarcss())
        .pipe(gulp.dest(destino))
});

gulp.task('default', ['sass', 'sass-minified']);

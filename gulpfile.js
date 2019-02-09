var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssmin = require('cssnano');
var prefix = require('autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sassLint = require('gulp-sass-lint');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var origen = 'sass/tofe.sass';
var destino = 'dist/css';
var opcionesPrefix = {
    browsers: ['last 2 versions']
}

function estilo() {
    return (
        gulp
            .src(origen)
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(destino))
            .pipe(postcss([prefix(opcionesPrefix), cssmin()]))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(destino))
    );
}


function watch() {
    gulp.watch(origen, estilo)
}

exports.estilo = estilo;
exports.watch = watch;
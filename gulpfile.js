var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task('buildJS', function() {
    var bundler = watchify(browserify({
        entries: ['./js/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest('./'));
    }
    build();
    bundler.on('update', build);
});

gulp.task('buildCSS', function() {
    gulp.src('./css/parts/*.css')
        .pipe(concat('store.css'))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
    gulp.watch('./css/parts/*.css', ['buildCSS']);
});

gulp.task('default', ['buildJS', 'buildCSS', 'watch']);





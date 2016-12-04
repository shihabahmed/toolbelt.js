var gulp = require('gulp'),
    clean = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    change = require('gulp-change'),
    babel = require('gulp-babel'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');


const noExport = function(content) {
    let contentLength = content.length;

    let index = {
        start: content.indexOf('module.exports')
    }

    index.end = content.indexOf(';', index.start + 1);
    index.end = index.end == -1 ? contentLength : index.end + 1;

    let str = content.substring(index.start, index.end);

    content = content.replace(str, '').replace(/^(\n|\r)|(\n|\r)+$/g, '');

    return content.replace(str, '');
}


{ // define paths for tasks 
    var path = {
        src: './src/*.js',
        dist: './dist',
        dist_ES6: './dist/es6'
    };
}


{ // clean, jshint and recompress scripts 
    gulp.task('clean', function() {
        return gulp.src(path.dist + '/*', { read: false })
            .pipe(clean());
    });

    gulp.task('js', ['clean'], function() {
        return gulp.src(path.src)
            .pipe(change(noExport))
            .pipe(gulp.dest(path.dist_ES6));
    });

    gulp.task('es6', ['js'], function() {
        return gulp.src(path.dist_ES6 + '/*.js')
            .pipe(babel({
                presets: ['latest']
            }))
            .pipe(gulp.dest(path.dist));
    });

}


{ // watch stylus, js and image files for changes 
    gulp.task('watch', function() {
        gulp.watch(path.src, ['es6']);
    });
}


gulp.task('default', ['es6', 'watch']);
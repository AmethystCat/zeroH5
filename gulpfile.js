/**
 * Created by Administrator on 2015/8/8.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('bs', function () {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    });

    gulp.watch('css/*.css').on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
});
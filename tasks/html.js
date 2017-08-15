/**
 * html编译
 * 模板include
 */
import gulp from 'gulp'
import sync from 'browser-sync'
import fileinclude from 'gulp-file-include'
let reload = sync.reload;

gulp.task('html', () => {
    gulp.src(['src/**/*.html','!src/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }))
});
/**
 * html编译
 * 模板include
 */
import gulp from 'gulp'
import fileinclude from 'gulp-file-include'

gulp.task('html', () => {
    gulp.src(['src/**/*.html','!src/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
})
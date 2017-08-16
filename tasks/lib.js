/**
 * 插件复制任务
 */
import gulp from 'gulp'

gulp.task('lib', () => {
    gulp.src(['src/lib/**/*.*'])
        .pipe(gulp.dest('dist/lib'))
})
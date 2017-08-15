/**
 * 插件复制任务
 */
import gulp from 'gulp'
import sync from 'browser-sync'
let reload = sync.reload;

gulp.task('lib', () => {
    gulp.src(['src/lib/**/*.*'])
        .pipe(gulp.dest('dist/lib'))
        .pipe(reload({
            stream: true
        }))
});
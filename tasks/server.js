/**
 * gulp 开发环境服务器
 * 编译自动刷新浏览器
 * 监听src对应文件执行任务
 */
import gulp from 'gulp'
import args from './utils/args'
import sync from 'browser-sync'

gulp.task('scripts-watch', ['scripts'], done => {
    sync.reload()
    done()
});
gulp.task('css-watch', ['css'], done => {
    sync.reload()
    done()
});

gulp.task('server', (cb) => {
    if (!args.watch) return cb()
    sync({
        notify: false,
        port: args.port,
        server: {
            baseDir: ['./dist']
        }
    });
    gulp.watch("src/js/**/*.js", ['scripts-watch'])
    gulp.watch('src/sass/**/*.scss', ['css-watch'])
    gulp.watch('src/**/*.html', ['html'])
    gulp.watch('src/images/**/*.*', ['image'])
    gulp.watch('src/images/sprite/**/*.*', ['sprite'])
    gulp.watch('src/lib/**/*.*', ['lib'])
    gulp.watch([
        'src/**/*.html',
        'src/images/**/*.*',
        'src/lib/**/*.*'
    ]).on('change', sync.reload)
})
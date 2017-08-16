/**
 * gulp 默认任务队列配置
 */
import gulp from 'gulp'
import gulpSq from 'gulp-sequence'
import args from './utils/args'
import sync from 'browser-sync'
let reload = sync.reload

gulp.task('default', (cb) => {
    gulpSq('clean', ['scripts', 'css', 'html', 'image', 'sprite', 'lib'], 'server', cb)
})
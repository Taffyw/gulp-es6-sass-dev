/**
 * gulp 默认任务队列配置
 */
import gulp from 'gulp'
import gulpSq from 'gulp-sequence'

gulp.task('default', (cb) => {
    gulpSq('clean', ['scripts', 'css', 'html', 'image', 'sprite', 'lib'], 'server', cb)
})
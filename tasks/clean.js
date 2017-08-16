/**
 * 清空dist文件夹
 */
import gulp from 'gulp'
import del from 'del'

gulp.task('clean', (cb) => {
    return del(['dist'])
})
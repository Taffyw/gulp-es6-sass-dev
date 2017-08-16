/**
 * 雪碧图任务
 */
import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith'

gulp.task('sprite', () => {
    return gulp.src('src/images/sprite/*.*')
        .pipe(spritesmith({
            imgName: 'sprite/sprite.png',
            cssName: 'sprite/sprite.css'
        }))
        .pipe(gulp.dest('dist/css')) //输出目录
})

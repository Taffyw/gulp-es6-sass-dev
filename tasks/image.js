/**
 * 图片压缩复制任务
 */
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import cache from 'gulp-cache'
gulp.task('image', () => {
    gulp.src(['src/images/**/*.{png,jpg,gif,ico}','!src/images/sprite/**/*.*'])
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images'))

})
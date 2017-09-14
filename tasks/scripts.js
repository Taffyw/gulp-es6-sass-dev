/**
 * js任务配置
 * es6编译es5
 * webpack打包依赖
 * 压缩js
 * 重命名
 */
import gulp from 'gulp'
import webpack from 'webpack-stream'
import webpackConfig from '../webpack.config'
import named from 'vinyl-named'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import plumber from 'gulp-plumber'
import {log, colors} from 'gulp-util'

gulp.task('scripts', () => {
    return gulp.src('src/js/main.js')
        .pipe(plumber({
            errorHandle: function () {

            }
        }))
        .pipe(named())
        // .pipe(webpack(webpackConfig, null, (err, stats) => {
        //     log(`Finished '${colors.cyan('default')}'`, stats.toString({
        //         chunks: false
        //     }))
        // }))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))
        .pipe(gulp.dest('dist/js'))
})
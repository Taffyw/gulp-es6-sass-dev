/**
 * css任务配置
 * 包括sass编译
 * css压缩
 * 重命名
 */
import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import named from 'vinyl-named'
// import concat from 'gulp-concat';
import rename from 'gulp-rename'
import args from './utils/args'
import sync from 'browser-sync'
let reload = sync.reload
import gulpif from 'gulp-if'

gulp.task('css', (cb) => {
    return gulp.src('src/**/*.scss')
        .pipe(rename({dirname: ''}))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(gulpif(args.watch, reload({
            stream: true
        })))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
})
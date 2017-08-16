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
// import concat from 'gulp-concat'
import rename from 'gulp-rename'

gulp.task('css', (cb) => {
    return gulp.src('src/**/*.scss')
        .pipe(rename({dirname: ''}))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
})
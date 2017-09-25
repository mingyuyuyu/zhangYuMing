var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
        .pipe(gulp.dest('./src/css/'))
})

// 监听sass文件修改
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
})
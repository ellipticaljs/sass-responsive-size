var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var concat=require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var REPO_NAME='sass-responsive-size';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp dist|minify|sassdoc"');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());
});

gulp.task('dist', function () {
    compileSass();
});

gulp.task('minify',function(){
    concatStream('./dist/responsive.size.css','responsive.size.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});

///private
function concatStream(src,name){
    return gulp.src(src)
        .pipe(concat(name))

}

function compileSass(){
    gulp.src('./src/responsive.size.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

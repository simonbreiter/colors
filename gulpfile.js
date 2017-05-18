var gulp = require('gulp')
var stylus = require('gulp-stylus')
var watch = require('gulp-watch')
var sourcemaps = require('gulp-sourcemaps')
var webpack = require('gulp-webpack');

gulp.task('stylus:build', function() {
    gulp.src('./src/stylus/**/*.styl')
        .pipe(stylus({compress: true}))
        .pipe(gulp.dest('./public/css/'))
})

gulp.task('webpack:build', function() {
    return gulp.src('src/js/main.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },
                ],
            },
            output: {
                filename: 'bundle.js',
            },
        }))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('build', [ 'stylus:build', 'webpack:build' ]);
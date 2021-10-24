const { src, dest } = require('gulp');
const { series } = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPng = require('gulp-tinypng-compress');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

function moveCss(cb) {
    return src('./src/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(dest('dist/css/'))
    cb();
}

function compressJs(cb) {
    return src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/js/'))
    cb();
}

function moveMinJs(cb) {
    return src('./src/js/*.min.js')
        .pipe(dest('dist/js/'))
    cb();
}

function moveHtml(cb) {
    return src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist/'))
    cb();
}

function moveFonts(cb) {
    return src('./src/font/**/*')
        .pipe(dest('dist/fonts'))
    cb();
}

function compressImg(cb) {
    return src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPng({
            key: 'f6p166ZPw79cTh6tPbfv6WRzQwNBBDg8'
        }))
        .pipe(dest('dist/img/'))
    cb();
}
exports.moveCss = moveCss;
exports.moveMinJs = moveMinJs;
exports.compressJs = compressJs;
exports.moveHtml = moveHtml;
exports.moveFonts = moveFonts;
exports.compressImg = compressImg;

exports.moveJs = series(moveMinJs, compressJs);
//exports.default = series(moveCss, moveJs, moveHtml, moveFonts, compressImg);
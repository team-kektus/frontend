const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const inject = require('gulp-inject');
const proxymiddleware = require('http-proxy-middleware');
const del = require('del');

const config = require('./config.json');
const assets = require('bower-files')(config.bowerConfig);


gulp.task('server', function () {
  connect.server({
    root: config.app.root,
    port: 8000,
    livereload: true,
    fallback: config.app.fallback,
    middleware: function () {
      apiProxy = proxymiddleware('/api', {
        target: 'http://localhost:7000',
        pathRewrite: {'^/api': ''}
      });
      return [apiProxy];
    }
  })
})

gulp.task('bower:js', function () {
  return gulp.src(assets.ext('js').files)
    .pipe(gulp.dest(config.lib.js))
})

gulp.task('bower:css', function () {
  return gulp.src(assets.ext(['css', 'scss']).files)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.lib.css))
})

gulp.task('bower:fonts', function () {
  return gulp.src(assets.ext(['eot', 'woff', 'woff2', 'ttf', 'svg']).files)
    .pipe(gulp.dest(config.lib.fonts))
})

gulp.task('bower', gulp.parallel('bower:js', 'bower:css', 'bower:fonts'))

gulp.task('inject', function () {
  return gulp.src(config.app.index)
    .pipe(inject(gulp.src(config.app.injectorder)))
    .pipe(gulp.dest(config.app.root))
})

gulp.task('clean', function (done) {
  var to_delete = [
    './app/**/*.css',
    './app/**/*.map',
    './app/lib'
  ]
  return del(to_delete)
})

gulp.task('build', gulp.series('clean', 'bower', 'inject'))

gulp.task('default', gulp.series('build', 'server'))

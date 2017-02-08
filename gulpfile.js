const gulp = require('gulp');
const connect = require('gulp-connect');
const proxymiddleware = require('http-proxy-middleware');

const config = require('./gulptasks/config.json');

console.log(config);

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

gulp.task('default', ['server'])

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var data = require('./src/mock/data.json');
var home = require('./src/mock/home.json');

gulp.task('default', function() {
    gulp.src('src')
        .pipe(webserver({
            host: 'localhost',
            port: 9090,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === '/info') {
                    res.end(JSON.stringify(data))
                } else if (req.url === '/newdata') {
                    res.end(JSON.stringify(home))
                } else {
                    next();
                }
            }
        }))
})
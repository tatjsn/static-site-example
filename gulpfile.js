const gulp = require('gulp');
const render = require('./helpers/gulp/render');

const html = () =>
  gulp.src('src/json/*.json')
    .pipe(render('src/html/product.html'))
    .pipe(gulp.dest('dist'));

gulp.task('default', gulp.series(html));

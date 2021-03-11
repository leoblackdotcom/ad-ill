const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      browserSync = require('browser-sync'),
      sourcemaps = require('gulp-sourcemaps'),
      changed = require('gulp-changed'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      connect = require('gulp-connect-php');

sass.compiler = require('node-sass');

var cssDest = './dist/css';
 
gulp.task('stylesheets', function(){
	return gulp.src('./src/styles/**/*.scss')
		.pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      require('autoprefixer'), 
      require('postcss-combine-media-query'), 
      require('postcss-combine-duplicated-selectors')
    ]))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
});

var jsFiles = 'src/scripts/**/*.js',
    jsDest = 'dist/js/';
 
gulp.task('js', function() {
  return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('stylesheets', function() {
  
  connect.server({}, function (){
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });

  gulp.watch('src/styles/**/*.scss', gulp.series('stylesheets'));
  gulp.watch('**/*.php').on('change', browserSync.reload);
  gulp.watch('src/scripts/**/*.js', gulp.series('js'));
}));
 
gulp.task('default', gulp.parallel('stylesheets','js','serve'));
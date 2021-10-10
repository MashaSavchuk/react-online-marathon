// 3.	The tasks of the topic "Gulp"
// 1.	Create the task will take all the js files located in the src directory and its subdirectories recursively and concatenate them into one output/result.js file
// 2.	Create the task will take all the css files located in the src directory and its subdirectories recursively and concatenate them into one output/result.css file
// 3.	Define the public default task will run the tasks described above


const { series } = require('gulp');
var gulp = require('gulp');
var concat = require('gulp-concat');

const buildJs = () => {
  return gulp.src('./src/**/*.js')
  .pipe(concat('result.js'))
  .pipe(gulp.dest('./output'))
}
const buildCss = () => {
  return gulp.src('./src/**/*.css')
  .pipe(concat('result.css'))
  .pipe(gulp.dest('./output'))
}
exports.default = series(buildJs, buildCss)

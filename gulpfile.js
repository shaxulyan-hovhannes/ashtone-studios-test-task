const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const connect = require("gulp-connect");

gulp.task("styles", function () {
  return gulp
    .src("styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("styles"))
    .pipe(connect.reload());
});

gulp.task("scripts", function () {
  return gulp
    .src("scripts/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("scripts"));
});

gulp.task("connect", function () {
  connect.server({
    root: ".",
    livereload: true,
    port: 8000,
  });
});

gulp.task("watch", function () {
  connect.reload();
  gulp.watch("styles/*.scss", gulp.series(styles));
});

gulp.task("default", gulp.series("styles", "scripts", "connect", "watch"));

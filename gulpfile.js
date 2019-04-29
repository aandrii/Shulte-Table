const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const sass = require("gulp-sass");
//const spriteSmith = require('gulp.spritesmith');
const babel = require("gulp-babel");
const rimraf = require("rimraf");

gulp.task("server", function() {
  browserSync.init({
    server: {
      port: 8080,
      baseDir: "build"
    }
  });

  gulp.watch("src/**/*").on("change", browserSync.reload);
});

gulp.task("template:compile", function buildHTML() {
  return gulp.src("src/*.html").pipe(gulp.dest("build"));
});
gulp.task("script:compile", () =>
  gulp
    .src("src/script/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("build/script"))
);

gulp.task("styles:compile", function() {
  return gulp
    .src("src/styles/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build/css"));
});

gulp.task("clean", function del(e) {
  return rimraf("build", e);
});

gulp.task("copy:fonts", function() {
  return gulp.src("src/fonts/**/*.*").pipe(gulp.dest("build/fonts"));
});

gulp.task("copy:images", function() {
  return gulp.src("src/images/**/*.*").pipe(gulp.dest("build/images"));
});

gulp.task("copy", gulp.parallel("copy:fonts", "copy:images"));

gulp.task("watch", function() {
  gulp.watch("src/styles/**/*.scss", gulp.series("styles:compile"));
  gulp.watch("src/**/*.html", gulp.series("template:compile"));
  gulp.watch("src/**/*.js", gulp.series("script:compile"));
});

gulp.task(
  "default",
  gulp.series(
    "clean",
    gulp.parallel(
      "template:compile",
      "styles:compile",
      "script:compile",
      "copy"
    ),
    gulp.parallel("watch", "server")
  )
);

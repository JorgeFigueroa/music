/**
 * Created by jorge on 01/02/16.
 */
//guardo los modulos en variables
var gulp = require('gulp');
var webserver = require('gulp-webserver');

//guardo las rutas en un objeto
var config = {
   styles: {
      main: './twentyfifteen/css/*.sass',
      watch: './twentyfifteen/css/*.css'
   },
   js: {
      watch: './twentyfifteen/js/*.js'
   },
   html: {
      watch: './twentyfifteen/*.php'
   }

}

//Tarea crear server con livereload
gulp.task('server', function() {
   gulp.src('./twentyfifteen')//carpeta server
      .pipe(webserver({
         host: '0.0.0.0',
         port: 8080,
         livereload: true
      }));
});

//Tarea vigilar directorios y compilar la tarea ['build:css]
gulp.task('watch', function() {
   gulp.watch(config.styles.watch);//vigila file sass
   gulp.watch(config.js.watch);//vigila file .html
   gulp.watch(config.html.watch);//vigila file .html
})

//un solo comando
gulp.task('default', ['server', 'watch']);

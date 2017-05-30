var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch',function() {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function() {
		browserSync.reload();
	});
	
	watch('./app/assets/style/**/*.css', function() {
		//gulp.start('styles'); //ถ้ามี cssInject ไม่ต้องใช้บรรทัดนี้แล้ว เพราะเราจะให้ task style รวมอยู่ใน Inject
		gulp.start('cssInject');
	});
	
	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});


gulp.task('cssInject',['styles'], function() { //แปลว่า cssInject จะไม่ทำงานจนกว่า Task Style จะทำงานเสร็จ
	return gulp.src('./app/temp/styles/style.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function() { 
	browserSync.reload();
});



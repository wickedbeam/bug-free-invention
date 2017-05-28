var gulp = require('gulp'); //เรียกมาจาก Folder 
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
	return gulp.src('./app/assets/style/style.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested ,autoprefixer])) //ตัวที่แปลงให้เป็น CSS ที่ Runcode ได้
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles')); //ตัวรับส่งข้อมูลให้ Copy อาจจะแต่งเพิ่มได้ มี Source มาจากไหน Dest ไปที่ไหน
});
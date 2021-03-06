/*jslint node: true */
"use strict";
module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',
		concat : {
			options : {
				banner : '<%= banner %>',
				stripBanners : true
			},
			angular : {
				src : [
					'node_modules/jquery/dist/jquery.min.js',
					'node_modules/bootstrap/dist/js/bootstrap.min.js',
					'assets/js/inspinia.js',
					'node_modules/metismenu/dist/metismenu.min.js',
					'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
					'node_modules/angular/angular.js',
					'node_modules/angular-ui-router/release/angular-ui-router.js',
					'node_modules/angular-sanitize/angular-sanitize.js',
					'node_modules/angular-filter/dist/angular-filter.js',
					'node_modules/angular-animate/angular-animate.js',
					'node_modules/angular-loading-bar/build/loading-bar.js',
					'node_modules/angular-datetime-input/dist/datetime.js',
					'node_modules/angular-input-masks/releases/angular-input-masks-standalone.js',
					'node_modules/string-mask/src/string-mask.js',
					'node_modules/moment/min/moment.min.js',
					'node_modules/moment/min/moment-with-locales.min.js',
					'node_modules/sweetalert/dist/sweetalert.min.js',
					'node_modules/angular-toastr/dist/angular-toastr.tpls.js'
				],
				dest : 'assets/js/<%= pkg.name %>-angular.js'
			},
			controllers: {
				src : [
					'app/app.js',
					'app/services/**/*.js',
					'app/components/**/*.js',
					'app/controllers/**/*.js'
				],
				dest : 'assets/js/<%= pkg.name %>-controllers.js'
			}
		},

		uglify : {
			options : {
				banner : '<%= banner %>'
			},
			angular : {
				src : '<%= concat.angular.dest %>',
				dest : 'assets/js/<%= pkg.name %>-angular.min.js'
			},
			controllers : {
				src : '<%= concat.controllers.dest %>',
				dest : 'assets/js/<%= pkg.name %>-controllers.min.js'
			}
		},

		cssmin : {
			options : {
				banner : '<%= banner %>'
			},
			target : {
				files : [{
					src : [
						'node_modules/bootstrap/dist/css/bootstrap.min.css',
						'node_modules/font-awesome/css/font-awesome.css',
						'assets/css/style.css',
						'assets/css/protocoloonline.css',
						'assets/css/animate.css',
						'node_modules/sweetalert/dist/sweetalert.css',
						'node_modules/angular-toastr/dist/angular-toastr.css',
						'node_modules/metismenu/dist/metismenu.min.css',
					],
					dest : 'assets/css/protocoloonline.min.css'
				}]
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: 'node_modules/bootstrap/fonts/',
						src: '**',
						dest: 'assets/fonts/'
					},
					{
						expand: true,
						flatten: true,
						cwd: 'node_modules/font-awesome/fonts/',
						src: '**',
						dest: 'assets/fonts/'
					},
				],
			},
		},

		watch: {
			configFiles: {
				files: [
					'Gruntfile.js',
					'app/app.js',
					'app/services/**/*.js',
					'app/components/**/*.js',
					'app/controllers/**/*.js',
					'assets/css/protocoloonline.css'
				],
				tasks: ['concat', 'uglify', 'cssmin', 'copy'],
				options: {
					reload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'concat', 'uglify', 'cssmin', 'copy', 'watch' ]);
};

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: 'assets/sass/**/*.scss',
				tasks: ['compass', 'autoprefixer:prefix'],
				options: {
					livereload : true
				}
			},
			js : {
				files : ['assets/javascript/**/*.js'],
				tasks : ['jshint'],
				options : {
					livereload : true
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					imagesDir: 'assets/images',
					javascriptsDir: 'assets/javascript',
					fontsDir: 'assets/fonts',
					environment: 'development',
					outputStyle: 'compressed',
					noLineComments: true
				}
			}
		},
		jshint : {
			all : ['assets/javascript/*.js'],
			options : {
				browser: true,
				curly: false,
				eqeqeq: false,
				eqnull: true,
				expr: true,
				immed: true,
				newcap: true,
				noarg: true,
				smarttabs: true,
				sub: true,
				undef: false
			}
		},
		autoprefixer: {
            prefix: {
                src: 'assets/css/*css'
            }
        },
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}
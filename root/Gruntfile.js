module.exports = function(grunt){
	grunt.initConfig({
		bower : {
			install : {
				options : {
					targetDir : './lib',
					layout : 'byType',
					cleanBowerDir : true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.registerTask('default', []);
	grunt.registerTask('setup', ['bower:install']);

};

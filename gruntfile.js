module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            files: ['tests/**/*.html']
        },
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['jshint', 'qunit']);
};
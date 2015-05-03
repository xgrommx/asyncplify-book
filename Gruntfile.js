var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'gh-pages': {
            options: {
                base: '_book'
            },
            src: ['**']
        }
    });

    grunt.registerTask('default', 'gh-pages');
};
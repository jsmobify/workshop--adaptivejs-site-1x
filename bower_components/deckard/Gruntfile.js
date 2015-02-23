'use strict'

var path = require('path');

module.exports = function(grunt) {
    var _ = grunt.util._;

    // By default, we load all local tasks from the tasks directory.
    grunt.file.expand('tasks/*').forEach(function(task) {
        grunt.loadTasks(task);
    });

    // Populate the config object
    var config = {};
    grunt.file.expand('tasks/config/*').forEach(function(configPath) {
        // Get the grunt-task name to put in the config which is based on the
        // name of the config file
        var configName = configPath.match(/\/([^\/]*)\.js/)[1];
        var option = require(path.join(__dirname + '/' + configPath))(grunt);
        config[configName] = _.extend(config[configName] || {}, option);
    });

    grunt.initConfig(_.extend({
        pkg: grunt.file.readJSON('package.json'),
        releaseName: '<%= pkg.name %>-<%= pkg.version %>',
        releaseMessage: '<%= pkg.name %> release <%= pkg.version %>'
    }, config));

    // load npm tasks
    var npmTasks = [
        'grunt-contrib-watch',
        'grunt-contrib-connect',
        'grunt-mocha-phantomjs',
        'grunt-contrib-copy',
        'grunt-contrib-uglify'
    ];

    npmTasks.forEach(function(taskName) {
        if (!grunt.task._tasks[taskName]) {
            grunt.loadNpmTasks(taskName);
        }
    });

    grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
    grunt.registerTask('build', ['lint:dev', 'copy', 'uglify']);
    grunt.registerTask('test', ['build', 'connect:test', 'mocha_phantomjs']);
    grunt.registerTask('test:browser', ['build', 'connect:test:keepalive']);
    grunt.registerTask('default', 'build');
};
/*global module:false*/
'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['app/**/*.js', '.tmp/templates.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            app: {
                src: 'app/**/*.js'
            }
        },
        watch: {
            injectJS: {
                files: ['app/**/*.js'],
                tasks: ['injector:scripts']
            },
            injectCss: {
                files: ['app/**/*.css'],
                tasks: ['injector:css']
            },
            livereload: {
                files: [
                    'app/**/*.html',
                    'app/**/*.css',
                    'app/**/*.js'
                ],
                options: {
                    livereload: true,
                    interval: 5007
                }
            }
        },
        injector: {
            scripts: {
                files: {
                    'index.html': ['app/app.js', 'app/**/*.js']
                }
            },
            css: {
                files: {
                    'index.html': ['app/**/*.css']
                }
            },
            karma: {
                options: {
                    transform: function (filePath) {
                        return '\'' + filePath.substring(1) + '\',';
                    },
                    starttag: '//-- injector:karma --',
                    endtag: '//-- endinjector:karma --'
                },
                files: {
                    'karma.conf.js': ['app/app.js', 'app/**/*.js', 'tests/**/*.js']
                }
            }
        },
        wiredep: {
            app: {
                src: 'index.html'
            },
            test: {
                devDependencies: true,
                src: 'karma.conf.js',
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify', 'wiredep', 'injector']);

    // Used for delaying livereload until after server has restarted
    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'injector',
            'wiredep',
            'wait',
            'watch'
        ]);
    });
};
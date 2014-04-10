'use strict';

module.exports = function (grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      main: {
        options: {
          port: 9001
        }
      }
    },
    watch: {
      main: {
        options: {
            livereload: true,
            livereloadOnError: false,
            spawn: false
        },
        files: ['angular-prompt.html','angular-prompt.js','dist/**/*','demo/**/*'],
        tasks: ['jshint']
      }
    },
    jshint: {
      main: {
        options: {
            jshintrc: '.jshintrc'
        },
        src: 'angular-prompt.js'
      }
    },
    jasmine: {
      unit: {
        src: ['./bower_components/angular/angular.js','./bower_components/angular-bootstrap/ui-bootstrap-tpls.js','./dist/angular-prompt.js','./demo/demo.js'],
        options: {
          specs: 'test/*.js'
        }
      }
    },
   ngtemplates: {
      main: {
        options: {
          module:'cgPrompt',
          base:''
        },
        src:'angular-prompt.html',
        dest: 'temp/templates.js'
      }
    },   
   concat: {
      main: {
        src: ['angular-prompt.js', 'temp/templates.js'],
        dest: 'dist/angular-prompt.js'
      }
    },    
    uglify: {
      main: {
        files: [
          {src:'dist/angular-prompt.js',dest:'dist/angular-prompt.min.js'}
        ]
      }
    }
  });

  grunt.registerTask('serve', ['jshint','connect', 'watch']);
  grunt.registerTask('build',['ngtemplates','concat','uglify']);
  grunt.registerTask('test',['build','jasmine']);

};
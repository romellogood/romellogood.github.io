module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'js/jquery.min.js',
          'js/bootstrap.min.js',
          'js/jquery.color.js',
          'js/Please.js',
          'js/main.js',
        ],
        dest: 'js/production.js',
      }
    },
    concat_css: {
      all: {
        src: ['stylesheets/bootstrap.min.css','stylesheets/styles.css'],
        dest: 'stylesheets/styles.css',
      },
    },
    cssmin: {
      target: {
        files: {
          'stylesheets/styles.css': 'stylesheets/styles.css',
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },
    less: {
      development: {
        files: {
          "stylesheets/styles.css": "stylesheets/styles.less",
        }
      }
    },
    uglify: {
      build: {
        src: 'js/production.js',
        dest: 'js/production.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify', 'less', 'concat_css', 'cssmin']);
};
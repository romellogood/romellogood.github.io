module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/jquery-color/jquery.color.js',
          'bower_components/pleasejs/dist/Please.js',
          'js/main.js',
        ],
        dest: 'js/production.js',
      }
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'less', 'cssmin']);
};
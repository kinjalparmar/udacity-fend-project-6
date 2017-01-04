module.exports = function (grunt) {

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  critical: {
    dist: {
      options: {
        base: './'
      },
      // The source file
      src: 'src/index.html',
      // The destination file
      dest: 'index.html'
    }
  },
  responsive_images: {
    dev: {
      options: {
        engine: 'im',
        sizes: [{
          width: 800 ,
          suffix: '_large',
          quality: 50
        }, {
          width: 600 ,
          suffix: '_medium',
          quality: 50
        }, {
          width: 100 ,
          suffix: '_small',
          quality: 50
        }]
      },
      files: [{
        expand: true,
        src: ['*.{gif,jpg,png,jpeg}'],
        cwd: 'src/img/',
        dest: 'dist/images/'
      }, {
        expand: true,
        src: ['*.{gif,jpg,png,jpeg}'],
        cwd: 'src/views/images',
        dest: 'dist/images/'
      }]
    }
  },
  uglify: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'src/js/',
        src: ['*.js', '!*.min.js'],
        dest: 'dist/js/',
        ext: '.min.js'
      },
	  {
        expand: true,
        cwd: 'src/views/js/',
        src: ['*.js', '!*.min.js'],
        dest: 'dist/js/',
        ext: '.min.js'
      }]
    }
  },
  cssmin: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'src/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      },
	  {
        expand: true,
        cwd: 'src/views/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }]
    }
  },
    
    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/images','dist/css','dist/js']
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mkdir');

  // Default tasks.
  grunt.registerTask('default', ['mkdir','critical','responsive_images','uglify','cssmin']);
};
module.exports = function (grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            sourceMap: true,
            sourceMapFileInline: true,
          },
          files: {
            './dist/css/styles.css': './src/less/styles.less',
          },
        },
      },
      watch: {
        styles: {
          files: ['./src/less/**/*.less'],
          tasks: ['less', 'cssmin'],
        },
        scripts: {
            files: ['./src/js/**/*.js'],
            tasks: ['uglify'],
          },
      },
      cssmin: {
        target: {
          files: [
            {
              expand: true,
              cwd: './dist/css/',
              src: ['*.css', '!*.min.css'],
              dest: './dist/css/',
              ext: '.min.css',
            },
          ],
        },
      },
      uglify: {
        target: {
          files: [
            {
              expand: true,
              cwd: './src/js/', 
              src: ['**/*.js'], 
              dest: './dist/js/',
              ext: '.min.js',
            },
          ],
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'watch']);  
};
  
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
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    grunt.registerTask('default', ['less', 'cssmin', 'watch']);
  };
  
module.exports = function(grunt) {
    
  grunt.initConfig({

    "less" : {

      "development": {

        "options": {
          "sourceMap" : true
        },

        "files": {
          'app/css/spongetest-less.css': 'app/less/spongetest-less.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less'] );

}
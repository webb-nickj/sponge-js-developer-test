module.exports = function(grunt) {

  var path = require('path');
    
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
    },

    "babel": {

      "development" : {
        "options": {

          "sourceMap": false,
          "sourceType" : "module",

          "presets" : [ 
            [
              "@babel/preset-env" , 
              {
                "targets" : {
                  "ie" : "11"
                },
                "modules":false
              }
            ] 
          ]
        },
        "files": {
          'app/es5/spongetest.js' : 'app/es6/spongetest.js',
          'app/es5/lib/content.js' : 'app/es6/lib/content.js'
        }
      }
    },

    "webpack" : {
      "development" : {
        "entry": './app/es5/spongetest.js',
        "mode" : "development",
        "output": {
          "path" : path.join( __dirname, '/app/es5' ),
          "filename": 'main.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['less' , 'babel' , 'webpack'] );
  grunt.registerTask('test-babel', ['babel'] );
  grunt.registerTask('test-less', ['less'] );

}
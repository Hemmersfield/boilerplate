module.exports = function(grunt){

  //configuration
  grunt.initConfig({

    //compile sass into a temp css
    sass: {
      build: {
        files:[{
          src: 'styles/main.sass',
          dest: '.tmp/sass.css'
        }]
      }
    },

    concat: {
      //group all Boilerplate JS into one file (not including scripts.js)
      boilerplate_js:{
        src:[
          '**/jquery.min.js'
          //add any additional vendor js here
        ],
        dest: 'scripts/boilerplate.js'
      },
      
      //fetch generated CSS from the temp directory
      css:{
        src:[
        '.tmp/*.css'
        ],
        dest: 'css/main.css'
      },

      //group all Boilerplate CSS into one file
      boilerplate_css:{
        src:[
        '**/normalize.css',
        '**/slick.css'
        ],
        dest: 'css/base.css'
      }

    },

    //watch for changes
    watch:{
      options:{
        livereload: true
      },
      files:[ 
        'styles/**/*.sass', 
        'static/*.html', 
        'scripts/scripts.js'
      ],
      tasks:[ 
        'sass', 
        'concat:css',
        'clean'
        ]
    },

    //remove temp directory
    clean: {
      temp: {
        src: ['.tmp']
      },
      dist:{
        src: ['dist']
      }
    },

    //setting up a live reload server
    express:{
      all:{
        options:{
          port: 9000,
          hostname: 'localhost',
          bases: ['.'],
          livereload: true

        }
      }
    },

    //Run a local server
    open:{
       dev: {
        path: 'http://localhost:9000/static/'
      }
    },

    uglify:{
      build:{
        src: [
          'scripts/scripts.js'
          ],
          dest: 'dist/scripts/scripts.js'
      },
    }


  });

  //Load Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-express');


  //Build Project
  grunt.registerTask('build', [
    'clean:dist',
    'uglify'
    ]);

  //Generate the project dependancies
  grunt.registerTask('generate', [
    'concat'
    ]);
  
  //Run Project Locally
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
    ]);

};

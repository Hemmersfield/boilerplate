module.exports = function(grunt){

  //configuration
  grunt.initConfig({

    //Compile sass into a temp css
    sass: {
      build: {
        files:[{
          src: 'styles/main.sass',
          dest: '.tmp/sass.css'
        }]
      }
    },

    concat: {
      //Group all Boilerplate JS into one file(not including scripts.js)
      boilerplate_js:{
        src:[
          '**/jquery.min.js'
        ],
        dest: 'scripts/boilerplate.js'
      },
      
      //Fetch generated CSS from the temp directory
      css:{
        src:[
        '.tmp/*.css'
        ],
        dest: 'styles/main.css'
      },

      //Group all Boilerplate CSS into one file
      boilerplate_css:{
        src:[
        '**/normalize.css',
        '**/slick.css'
        ],
        dest: 'styles/base.css'
      }

    },

    //Watch for changes in the dev code
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
        'concat:css'
        ]
    },

    //Remove temp directory
    clean: {
      temp: {
        src: ['.tmp']
      },
      dist:{
        src: ['dist']
      }
    },

    //Setting up a Live reload server
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

    //Open the project server in a browser
    open:{
       dev: {
        path: 'http://localhost:9000/static/'
      }
    },

    //Tasks for deployment

    //Compress all JS
    uglify:{
      build:{
        src: [
        'app/scripts/boilerplate.js',
        'app/scripts/scripts.js'
        ],
        dest: 'app/.tmp/scripts/scripts.js'
      }
    },

    //Make copies into seperate projects
    copy: {
      'static':{
        src: [
          '.tmp/scripts/scripts.js',
          'styles/main.css'
        ], 
        dest: 'dist/static/'
      }
    }

    //Add CSS.min

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

  //Register Tasks

  grunt.registerTask('build', [
    'clean:dist',
    'generate',
    'uglify',
    'copy:static'
    ]); 

  //Generate the project dependancies
  grunt.registerTask('generate', [
    'sass',
    'concat'
    ]);
  
  //Run Project Locally
  grunt.registerTask('server', [
    'generate',
    'express',
    'open',
    'watch'
    ]);

};

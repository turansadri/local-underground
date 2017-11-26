const __DEV__ = process.env.NODE_ENV !== 'production';

const createTransforms = () => {
  const transforms = [['babelify', { presets: ['es2015'] }]];

  transforms.push([
    'envify',
    { NODE_ENV: __DEV__ ? 'development' : 'production' },
  ]);

  return transforms;
};

module.exports = function(grunt) {
  require('jit-grunt')(grunt); // eslint-disable-line global-require
  require('time-grunt')(grunt); // eslint-disable-line global-require

  grunt.initConfig({
    browserify: {
      options: {
        keepAlive: false,
        watch: true,
        browserifyOptions: {
          debug: __DEV__,
        },
      },
      dist: {
        options: {
          transform: createTransforms(),
        },
        src: ['./wp-content/themes/lu/lib/js/src/app.js'],
        dest:
          './wp-content/themes/lu/lib/js/min/browserified.js',
      },
    },
    uglify: {
      options: {
        mangle: __DEV__,
        compress: {
          sequences: __DEV__,
          dead_code: __DEV__,
          conditionals: __DEV__,
          booleans: __DEV__,
          unused: __DEV__,
          if_return: __DEV__,
          join_vars: __DEV__,
          drop_console: false,
        },
      },
      localUnderground: {
        files: {
          './wp-content/themes/lu/lib/js/min/browserified.min.js': [
            './wp-content/themes/lu/lib/js/min/browserified.js',
          ],
        },
      },
    },
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
        },
        files: {
          './wp-content/themes/lu/lib/css/main.css':
            './wp-content/themes/lu/lib/css/sass/main.scss',
        },
      },
    },
    cssmin: {
      options: {
        level: {
          1: {
            all: true,
          },
          2: {
            restructureRules: true, // controls rule restructuring; defaults to false
          },
        },
      },
      target: {
        files: {
          './wp-content/themes/lu/lib/css/main.min.css': [
            './wp-content/themes/lu/lib/css/main.css',
          ],
        },
      },
    },
    postcss: {
      dist: {
        files: {
          './wp-content/themes/lu/lib/css/main.css':
            './wp-content/themes/lu/lib/css/main.css',
        },
      },
      options: {
        map: true,
        processors: [require('autoprefixer')], // eslint-disable-line global-require
      },
    },
    watch: {
      sass: {
        files: './wp-content/themes/lu/lib/css/sass/**/*.scss',
        tasks: ['sass:dev'] /* ['sass:dev', 'postcss'] */,
      },
      js: {
        files: ['./wp-content/themes/lu/lib/js/src/app.js'],
        tasks: ['browserify'],
      },
      uglify: {
        files: [
          './wp-content/themes/lu/lib/js/min/browserified.js',
        ],
        tasks: ['uglify'],
      },
      concat: {
        files: [
          './wp-content/themes/lu/lib/js/min/browserified.js',
        ],
        tasks: ['concat:dev'],
      },
      options: {
        livereload: true,
      },
    },
    concat: {
      prod: {
        src: [
          './wp-content/themes/lu/lib/js/min/browserified.min.js',
        ],
        dest:
          './wp-content/themes/lu/lib/js/min/script.min.js',
      },
      dev: {
        src: [
          './wp-content/themes/lu/lib/js/min/browserified.js',
        ],
        dest:
          './wp-content/themes/lu/lib/js/min/script.dev.js',
      },
    },
  });

  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('build-js', [
    'browserify',
    'uglify',
    'concat:prod',
    'concat:dev',
  ]);
  grunt.registerTask('build-css', ['sass', 'cssmin', 'postcss']);
  grunt.registerTask('build', [
    'browserify',
    'uglify',
    'sass',
    'cssmin',
    'postcss',
    'concat:prod',
    'concat:dev',
  ]);
};

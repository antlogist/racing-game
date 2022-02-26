let mix = require('laravel-mix');

mix.scripts([
  'src/js/car.js',
  'src/js/graphics.js',
  'src/js/track.js',
  'src/js/input.js',
  'src/js/app.js',
], 'dist/js/app.js');
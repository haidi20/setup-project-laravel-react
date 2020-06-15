const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   // .sourceMaps();

mix.babelConfig({
   plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.webpackConfig({ 
   output: { 
      filename: '[name].js',
      chunkFilename: 'js/chunks/[name].app.js', 
      publicPath: '', 
   } 
});

mix.browserSync('localhost:8000');

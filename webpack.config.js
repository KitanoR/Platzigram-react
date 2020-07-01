const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
  output: { 
    filename: 'app.bundle.js',
    publicPath: '/'
   },
   devServer: { 
     historyApiFallback: true
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: 'src/index.html'
     }),
     new WebpackPwaManifestPlugin({
       name: 'Petgram - Tu app de fotos con mascotas',
       shortname: 'Petgram',
       description: 'Con petgram puedes encontrar fotos de animales domésticos',
       background_color: '#fff',
       theme_color: '#b1a',
       icons: [
         {
           src: path.resolve('src/assets/icon.png'),
           sizes: [96, 128, 192, 256, 384, 512]
         }
       ]
     }),
     new WorkboxWebpackPlugin.GenerateSW({
       runtimeCaching: [
         {
           urlPattern: new RegExp('https://(res.cloudinary.com | images.unsplash.com)'),
           handler: 'CacheFirst',
           options: {
             cacheName: 'images'
           }
         },
         {
          urlPattern: new RegExp('https://petgram-server-caye-96c8a0wec.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
       ]
     })

    ],
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: { 
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets:[
              '@babel/preset-env',
              '@babel/preset-react'
            ] 
          }
        }
      }
    ]
  }
}

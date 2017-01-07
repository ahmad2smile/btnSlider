

module.exports = {
  entry:'./js/main.js',
  module:{
    loaders:[
      {
        test:'/(\.js)$/',
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
      },
      {test: /(\.css)$/, loaders: ['style', 'css']}
    ]
  }
};

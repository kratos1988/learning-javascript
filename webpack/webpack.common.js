module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          babelrc: true,
          cacheDirectory: true,
        },
      },
    ],
  },
};

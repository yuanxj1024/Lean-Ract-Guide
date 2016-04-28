/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-04-28 16:34:41
 * @version $Id$
 */

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['jsx?harmony'] }
    ]
  }
};


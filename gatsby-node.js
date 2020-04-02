/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  })
}

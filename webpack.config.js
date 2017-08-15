/**
 * 通过babel转码es6
 * @type {{module: {loaders: [*]}}}
 */
module.exports = {
    // watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
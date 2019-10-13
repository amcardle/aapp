var webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                GITVERSION: JSON.stringify(process.env.NOW_GITHUB_COMMIT_SHA || "undefined"),
                GITBRANCH: JSON.stringify(process.env.NOW_GITHUB_COMMIT_REF || "undefined")
            })
        ],
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-plain-loader'
                    //https://html2jade.org/
                }
            ]
        }
    },
    devServer: { disableHostCheck: true }
};
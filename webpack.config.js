var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};


// Tutorial: jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/

// Babel issue: stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token?answertab=votes#tab-top

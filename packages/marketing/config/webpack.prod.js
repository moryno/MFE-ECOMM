const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig =  require("./webpack.common");
const packageJson = require("../package.json");

const productionConfig = {
    mode: "production",
    output:{
        filename: "[name].[contenthash].js"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            exposes: {
                "./MarketingApp": "./src/bootstrap"
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig)
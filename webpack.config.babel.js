import HtmlWebPackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true, importLoaders: 1 }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.svg$/,
                use: "svg-inline-loader"
            },
            {
                test: /\.mp4/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            {
                context: "./src/favicon/",
                from: "**/*"
            },
            {
                from: "./src/site.webmanifest"
            },
            {
                from: "./src/browserconfig.xml"
            },
            {
                from: "./_redirects"
            }
        ])
    ]
};
